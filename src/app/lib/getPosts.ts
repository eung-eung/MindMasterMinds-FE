import axious from "./axious"


const getPostsPage = async (pageParam = 1 || {}, option = {}, accessToken: any) => {


    const response = await axious.get(`/Post?pageNumber=${pageParam - 1}&pageSize=1`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
    return response.data.data


}
export default getPostsPage