"use client"
import React, { useState, useRef, useEffect } from 'react';
import {
  HiOutlinePlus,
  HiOutlineTrash,
  HiOutlineExternalLink,
  HiOutlineSave,
  HiOutlinePhotograph,
  HiSelector
} from 'react-icons/hi';
import api from '@/lib/api';
import { API_BASE_URL } from '@/lib/api-config';
import LoadingScreen from '../components/LoadingScreen';

interface Product {
  id?: string;
  _id?: string;
  title: string;
  description: string;
  logo: string;
  redirectUrl: string;
  order: number;
  status: boolean;
}

import { useToast } from '../components/Toast';

const ProductsManagement: React.FC = () => {
  const { showToast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/content/products');
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => (p._id === id || p.id === id) ? { ...p, ...updates } : p));
  };

  const addProduct = () => {
    setProducts([...products, {
      id: Date.now().toString(),
      title: 'New Product',
      description: 'Short description for the dropdown menu.',
      logo: 'https://picsum.photos/seed/new/100/100',
      redirectUrl: '#',
      order: products.length + 1,
      status: true
    }]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/products', products);
      const { data } = await api.get('/content/products');
      setProducts(data);
      showToast('success', 'Navbar Updated', 'Product dropdown structure saved.');
    } catch (err) {
      console.error("Error saving products", err);
      showToast('error', 'Update Failed', 'Failed to save products.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const { data } = await api.post('/content/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      updateProduct(id, { logo: data.url });
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  // Drag and Drop Logic
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const newList = [...products];
    const itemToMove = newList[draggedIndex];
    newList.splice(draggedIndex, 1);
    newList.splice(index, 0, itemToMove);

    const updatedOrderList = newList.map((item, idx) => ({
      ...item,
      order: idx + 1
    }));

    setDraggedIndex(index);
    setProducts(updatedOrderList);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  if (isLoading) return <LoadingScreen text="Loading Inventory" />;

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Products Navbar</h1>
          <p className="text-[var(--color-20)]">Drag and drop to reorder items in the Navbar dropdown menu.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={addProduct}
            className="flex items-center gap-2 bg-[var(--color-13)] text-[var(--color-7)] px-5 py-2.5 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            <HiOutlinePlus size={20} /> Add Item
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] disabled:opacity-50 transition-all"
          >
            {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
            Publish Dropdown
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[var(--color-23)] shadow-sm overflow-hidden">
        <div
          className="divide-y divide-[var(--color-23)]"
          onDragOver={(e) => e.preventDefault()}
        >
          {products.map((product, index) => (
            <div
              key={product._id || product.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              className={`p-6 transition-all duration-300 flex flex-col lg:flex-row gap-6 relative group
                ${draggedIndex === index ? 'opacity-40 scale-[0.98] bg-[var(--color-13)]' : 'hover:bg-[var(--color-25)]'}
                ${!product.status && draggedIndex !== index && 'opacity-60'}
              `}
            >
              <div className="flex lg:flex-col items-center justify-center cursor-grab active:cursor-grabbing text-[var(--color-21)] group-hover:text-[var(--color-7)] transition-colors pr-2">
                <HiSelector size={24} />
              </div>

              <div className="flex-shrink-0 flex items-start justify-center pt-2">
                <div className="relative">
                  <img src={product.logo.startsWith('/') ? `${API_BASE_URL}${product.logo}` : product.logo} alt="" className="w-16 h-16 rounded-2xl object-cover ring-4 ring-[var(--color-24)]" />
                  <label className="absolute -bottom-1 -right-1 p-1.5 bg-white border border-[var(--color-23)] rounded-lg text-[var(--color-21)] hover:text-[var(--color-7)] shadow-sm cursor-pointer">
                    <HiOutlinePhotograph size={14} />
                    <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, (product._id || product.id)!)} />
                  </label>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase tracking-wider">Product Title</label>
                    <input
                      type="text"
                      value={product.title}
                      onChange={e => updateProduct((product._id || product.id)!, { title: e.target.value })}
                      className="w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-lg outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase tracking-wider">Description</label>
                    <textarea
                      value={product.description}
                      onChange={e => updateProduct((product._id || product.id)!, { description: e.target.value })}
                      className="w-full bg-transparent border-none text-sm text-[var(--color-20)] p-0 outline-none resize-none leading-relaxed focus:ring-0"
                      rows={2}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase tracking-wider">Redirect URL</label>
                    <div className="flex items-center gap-2 bg-[var(--color-24)] px-3 py-2 rounded-xl border border-[var(--color-23)]">
                      <HiOutlineExternalLink size={16} className="text-[var(--color-21)]" />
                      <input
                        type="text"
                        value={product.redirectUrl}
                        onChange={e => updateProduct((product._id || product.id)!, { redirectUrl: e.target.value })}
                        className="bg-transparent border-none text-xs w-full outline-none focus:ring-0 p-0 text-[var(--color-18)] font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateProduct((product._id || product.id)!, { status: !product.status })}
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all shadow-sm ${product.status ? 'bg-[var(--color-13)] text-[var(--color-7)]' : 'bg-[var(--color-24)] text-[var(--color-21)]'}`}
                      >
                        {product.status ? 'Active' : 'Inactive'}
                      </button>
                      <span className="text-[10px] font-bold text-[var(--color-21)] bg-[var(--color-24)] px-2 py-1 rounded-md">
                        Order: {product.order}
                      </span>
                    </div>
                    <button
                      onClick={() => setProducts(prev => prev.filter(p => (p._id || p.id) !== (product._id || product.id)))}
                      className="text-xs font-bold text-[var(--color-27)] hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <HiOutlineTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 && (
          <div className="p-12 text-center text-[var(--color-21)]">
            <p>No products in the dropdown. Click "Add Item" to start.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsManagement;

