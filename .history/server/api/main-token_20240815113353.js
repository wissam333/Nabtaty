import errorOptions from '../utils/error-options';

export default defineEventHandler(async () => {
    const { serverApi, serverApiBase } = useRuntimeConfig();
    const storage = useStorage()
    try {
        const response = await $fetch(`${serverApi.AuthLoginApi}`, {
            baseURL: serverApiBase,
            method: "POST",
            retry: 10,
            headers: {
                'Accept-Language': 'en-US'
            },
            body: {
                email: "admin@royal.com",
                password: "Admin&2023",
            }
        });
        await storage.setItem('mainToken', response)
        // console.log('response,', response)
        return response
    } catch (err) {
        console.log('error main token ', err)
        throw createError(errorOptions(err))
    }
})