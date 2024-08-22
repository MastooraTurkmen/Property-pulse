const domainID = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
async function fetchProperties() {
    try {
        // Handle the case where the domain is not availabe yet
        if (!domainID) {
            return [];
        }

        const res = await fetch(`${domainID}/properties`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json()

    } catch (error) {
        console.log(error);
        return [];
    }
}

// fetch single property
async function fetchProperty(id) {
    try {
        // Handle the case where the domain is not availabe yet
        if (!domainID) {
            return null;
        }

        const res = await fetch(`${domainID}/properties/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json()

    } catch (error) {
        console.log(error);
        return null;
    }
}

export { fetchProperties, fetchProperty };