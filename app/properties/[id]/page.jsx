'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProperty } from '@/utils/request';
import { useParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

const PropertyPage = async () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    }

    if (property === null) {
      fetchPropertyData()
    }

  }, [id, property])

  if (!property && !loading) {
    return (
      <h1 className="text-center font-bold text-2xl mt-10">
        Property not found
      </h1>
    )
  }
  
  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
        </>
      )}
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/properties'
            className='text-blue-500 hover:text-blue-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Properties
          </Link>
        </div>
      </section>
    </>
  );
};
export default PropertyPage;
