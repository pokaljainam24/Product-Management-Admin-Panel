import React, { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './pages/Form';
import Table from './pages/Table';

function App() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [error, setError] = useState({});
  const imgRef = useRef();

  const navigation = useNavigate();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);


  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;

    // Handle warehouse checkboxes
    if (name === 'warehouse') {
      let newWarehouse = [...warehouse];

      if (checked) {
        newWarehouse.push(value);
      } else {
        newWarehouse = newWarehouse.filter((item) => item !== value);
      }

      setWarehouse(newWarehouse);
      setProduct({ ...product, warehouse: newWarehouse });
      return;
    }

    // Handle image upload
    if (name === 'image') {
      const file = files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const imageData = {
            name: file.name,
            type: file.type,
            url: reader.result,
          };

          setProduct({ ...product, image: imageData });
          console.log('Image uploaded:', imageData);
        };

        reader.readAsDataURL(file);
      }
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!product.name) errors.name = 'Product name is required';
    if (!product.price || isNaN(product.price)) errors.price = 'Valid price is required';
    if (!product.stock) errors.stock = 'Stock is required';
    if (!product.image) errors.image = 'Image is required';
    if (!product.discription) errors.discription = 'Description is required';
    if (!product.warehouse || product.warehouse.length === 0) errors.warehouse = 'At least one warehouse must be selected';

    setError(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let updatedProducts;

    if (product.id) {
      updatedProducts = products.map((item) =>
        item.id === product.id ? product : item
      );
      alert('Product updated successfully!');
    } else {
      updatedProducts = [...products, { ...product, id: Date.now() }];
      alert('Product added successfully!');
    }

    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProduct({});
    setWarehouse([]);
    imgRef.current.value = '';
  };


  useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setProduct(productToEdit);
    setWarehouse(productToEdit.warehouse || []);
    navigation('/form');
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form handleChange={handleChange} product={product} handleSubmit={handleSubmit} imgRef={imgRef} error={error} />} />
      <Route path="/table" element={<Table products={products} handleDelete={handleDelete} handleEdit={handleEdit} />} />
    </Routes>
  );
}

export default App;
