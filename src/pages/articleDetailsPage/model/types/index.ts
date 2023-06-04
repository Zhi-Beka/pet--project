import { ArticleDetailsCommentSchema } from "./articleDetailsCommentSchema";
import { ArticleDetailsRecommendationSchema } from "./articleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationSchema;
}
