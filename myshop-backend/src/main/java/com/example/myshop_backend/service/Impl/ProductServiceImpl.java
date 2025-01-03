package com.example.myshop_backend.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.exceptions.BadCredentialsException;
import com.example.myshop_backend.mapper.ProductMapper;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.service.ProductService;

import jakarta.persistence.criteria.Join;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{
	
	private ProductRepository productRepository;
	
	@Override
	public ProductDto addProduct(ProductDto productDto) {
		return null;
	}
	
	@Override
	public ProductDto createProductDto(Product product) {
//        if(productDto.getProductId()!=null)
//        {
//        	productDto.setProductId(null);
//        }
//        else if(productRepository.existsById(productDto.getProductId())){
//        	throw new BadCredentialsException("Id Exist");
//        }
        ProductDto savedProduct = ProductMapper.productToProductDto(productRepository.save((product)));
        return savedProduct;
    }
	
	@Override
	public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        List<ProductDto> productDtos = new ArrayList<>();
        for (Product product : products) {
            ProductDto productDto = ProductMapper.productToProductDto(product);
            productDtos.add(productDto);
        }
        return productDtos;
	}
	
	@Override
	public Page<ProductDto> getFilteredPageProducts(String collection, String brand, Pageable pageable) {
	    // Tạo query với điều kiện động
	    Specification<Product> spec = Specification.where(null);

	    if (collection != null && !collection.isEmpty()) {
	        spec = spec.and((root, query, criteriaBuilder) -> {
	            // Thực hiện JOIN với bảng collections
	            Join<Object, Object> join = root.join("collections");
	            return criteriaBuilder.equal(join.get("collectionName"), collection);
	        });
	    }

	    if (brand != null && !brand.isEmpty()) {
	        spec = spec.and((root, query, criteriaBuilder) -> 
	            criteriaBuilder.equal(root.get("brand").get("brandName"), brand));
	    }

	    // Lấy dữ liệu theo spec và phân trang
	    return productRepository.findAll(spec, pageable)
	            .map(product -> ProductMapper.productToProductDto(product));
	}

	
}
