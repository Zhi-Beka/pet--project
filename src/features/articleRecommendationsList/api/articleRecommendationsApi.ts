import { rtkApi } from "shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
            query: (limit) => ({
                url: "/articles",
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});
export const useArticleRecommendationListApi =
    recommendationsApi.useGetArticleRecommendationListQuery;
