package com.example.myshop_backend.reponsitory.custom;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Repository;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Brand;
import com.example.myshop_backend.entity.Category;
import com.example.myshop_backend.entity.Collection;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.reponsitory.ProductRepositoryCustom;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

@Repository
public class ProductRepositoryImpl implements ProductRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Page<ProductDto> findAllProductDtosWithFilter(String collection, String brand, Pageable pageable) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<ProductDto> cq = cb.createQuery(ProductDto.class);
        Root<Product> root = cq.from(Product.class);

        // JOIN
        Join<Product, Category> categoryJoin = root.join("category", JoinType.LEFT);
        Join<Product, Brand> brandJoin = root.join("brand", JoinType.LEFT);
        Join<Product, Collection> collectionJoin = root.join("collections", JoinType.LEFT);

        // SELECT
        cq.select(cb.construct(ProductDto.class,
                root.get("productId"),
                root.get("name"),
                root.get("description"),
                root.get("price"),
                root.get("imageUrl"),
                categoryJoin.get("categoryId"),
                cb.literal(null) // Placeholder vì collectionId cần xử lý tay
        )).distinct(true);
        cq.orderBy(cb.asc(root.get("productId"))); 
        List<Predicate> predicates = new ArrayList<>();
        if (brand != null && !brand.isEmpty()) {
            predicates.add(cb.equal(brandJoin.get("brandName"), brand));
        }
        if (collection != null && !collection.isEmpty()) {
            predicates.add(cb.equal(collectionJoin.get("collectionName"), collection));
        }

        if (!predicates.isEmpty()) {
            cq.where(cb.and(predicates.toArray(new Predicate[0])));
        }

        // Pagination
        TypedQuery<ProductDto> query = entityManager.createQuery(cq);
        query.setFirstResult((int) pageable.getOffset());
        query.setMaxResults(pageable.getPageSize());

        List<ProductDto> resultList = query.getResultList();

        // COUNT
        CriteriaQuery<Long> countQuery = cb.createQuery(Long.class);
        Root<Product> countRoot = countQuery.from(Product.class);
        Join<Product, Brand> countBrandJoin = countRoot.join("brand", JoinType.LEFT);
        Join<Product, Collection> countCollectionJoin = countRoot.join("collections", JoinType.LEFT);

        countQuery.select(cb.countDistinct(countRoot));

        List<Predicate> countPredicates = new ArrayList<>();
        if (brand != null && !brand.isEmpty()) {
            countPredicates.add(cb.equal(countBrandJoin.get("brandName"), brand));
        }
        if (collection != null && !collection.isEmpty()) {
            countPredicates.add(cb.equal(countCollectionJoin.get("collectionName"), collection));
        }

        if (!countPredicates.isEmpty()) {
            countQuery.where(cb.and(countPredicates.toArray(new Predicate[0])));
        }

        Long total = entityManager.createQuery(countQuery).getSingleResult();

        // Nếu bạn cần collectionId -> xử lý tay (chạy thêm 1 query hoặc sửa DTO)
        return new PageImpl<>(resultList, pageable, total);
    }
}