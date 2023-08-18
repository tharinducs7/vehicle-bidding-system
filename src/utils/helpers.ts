export const currencyFormat = (number: number) => {
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(number)
}

export const generateImageUrl = (url: string, newAngle: number = 1) => {
    // Parse the URL
    if (url === undefined || url === '') return url;

    const imageUrl = new URL(url);

    // Get the query parameters
    const queryParams = imageUrl.searchParams;

    queryParams.set("angle", newAngle.toString());

    const modifiedUrl = `${imageUrl.origin}${imageUrl.pathname}?${queryParams.toString()}`;

    return modifiedUrl;
}

