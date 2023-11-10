import React from 'react'
import ProductsInfo from './ProductsInfo';

const Products = ({ products }) => {
    const categories = []

    { products.filter(product => categories.push(product.category)) }

    const uniqueCategories = [...new Set(categories)]

    const onSubmit = e => e.preventDefault()

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                {uniqueCategories.map(uniqueCategory => (
                    <div key={uniqueCategory}>
                        {products.find(product => product.category === uniqueCategory) &&
                            <div>
                                <h2 className='text-2xl font-bold capitalize mb-4'>{uniqueCategory}</h2>

                                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto mb-8'>
                                    {products.filter(productCategories => productCategories.category === uniqueCategory)
                                        .map(product => (
                                            <li key={product.id} className='w-64 h-auto border rounded'>
                                                <ProductsInfo product={...product} />
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        }
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Products