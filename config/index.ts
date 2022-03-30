const dev: boolean = process.env.NODE_ENV !== 'production';

export const HOST = dev ? "http://localhost:3000/" : "https://www.ricoputra.space/";