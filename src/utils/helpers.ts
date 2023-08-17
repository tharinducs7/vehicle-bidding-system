import { VehicleInterface } from "./interfaces";

export const generateCarImageUrl = (car: VehicleInterface, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { details } = car;

   // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', details.brand);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${details.manufactureYear}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 