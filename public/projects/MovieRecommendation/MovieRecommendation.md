![Thumbnail image of Netflix movies](../projects/MovieRecommendation/movies_large.png)

With the abundance of media available today, users face information overload, making it difficult to decide what content to consume next. Recommendation systems address this by helping users navigate vast amounts of information through personalized suggestions, which improves user engagement and retention.

This project aimed to implement and compare different recommendation strategies to evaluate their accuracy and performance. The specific approaches explored include Collaborative Filtering, Content-Based Filtering, Hybrid Filtering, and Reinforcement Learning.

## Materials

The research utilized the [MovieLens 32M dataset](https://grouplens.org/datasets/movielens/), which includes data collected between January 1995 and October 2023.

#### Scale
The dataset contains 32 million ratings and two million tags applied to 87,585 movies by 200,948 users.

#### File Structure
*movies.csv*: Contains movie titles, IDs, and pipe-separated genres (e.g., Action, Comedy, Sci-Fi).
*ratings.csv*: Contains user ratings on a 5-star scale (0.5 to 5.0 increments) and timestamps.
*tags.csv*: Contains user-generated metadata (single words or short phrases).
*links.csv*: Contains identifiers to link data to IMDB and TMDB.

External Data: A TMDB movie dataset was used with the links file to obtain movie overviews.


## Methods

We began by cleaning the dataset to remove inconsistent records and splitting it into separate training and testing sets. Implemented in Python using Keras, pandas, and NumPy within a Google Colab environment, we compared three distinct recommendation strategies. The first, collaborative filtering, utilized a Neural Collaborative Filtering (NCF) model to learn latent factors from user-movie embeddings. The second, content-based filtering, used Term Frequency-Inverse Document Frequency (TF-IDF) on movie overviews to identify frequent and common keywords, while also considering features like genres and tags. The third was a hybrid approach that generated candidates using content similarity and ranked them using the collaborative model's predicted ratings.

To quantitatively evaluate these models, we focused on two specific metrics: Hit Rate and Mean Reciprocal Rank (MRR). We measured these metrics at three different cutoff points: Top 10, Top 25, and Top 100 recommendations to see how performance varied as the list of suggestions grew. The evaluation used a "hold-out" strategy where we hid a user's favorite movie and checked if the model could recommend it back to them. However, we had to apply specific filters to ensure the test was fair. First, for the Basic Filter, we removed users with only a single rating because otherwise, holding out that one rating would leave no remaining reviews to recommend off of. Second, for the Advanced Filter, we required users to have at least two positive ratings (≥ 3.0 stars). This was crucial because users with only negative reviews offer no "likes" to predict, and users with only one positive review lose their only strong preference during the hold-out process.

Below is a step-by-step walkthrough (that I made as part of our final presentation) of the "hold-out" method that we used to check Hit Rate and Mean Reciprocal Rank.
![Step-by-step example of hold-one-out process](../projects/MovieRecommendation/hold_out_demo.gif "width=70")


## Results

### Basic Filter
The results from the first filter (removing users with only one rating) demonstrated that no single model was perfect. The Hybrid approach achieved the highest Hit Rate (reaching nearly 8% in the Top 100), proving it was the most effective at eventually finding the correct movie. However, Content-Based Filtering achieved the highest Mean Reciprocal Rank (MRR) score of 0.151. This indicates that while the content-based model found the target movie less often than the hybrid model, when it did find it, it ranked the movie much higher on the list (closer to the top). In contrast, Collaborative Filtering performed poorly in this scenario, likely due to data sparsity issues where there wasn't enough user history to find meaningful patterns.

![Hit Rate](../projects/MovieRecommendation/hit_rate_1.png?raw=true "width=70")
![Mean Reciprocal Rank](../projects/MovieRecommendation/mrr_1.png?raw=true "width=70")

### Advanced Filter
From the second filter (requiring at least two positive reviews), the dynamic shifted dramatically. With cleaner user data, Collaborative Filtering saw a massive performance boost, becoming the clear winner. It maintained a steady Hit Rate of 5% across all "Top K" cutoff points and achieved an MRR of roughly 0.5, meaning that on average, the held-out movie appeared in the top two recommendations. Conversely, Content-Based Filtering performance dropped to near zero. This suggests that for users with specific positive ratings, the content model likely got "stuck" recommending only very similar items (e.g., sequels) and failed to predict the held-out movie if it deviated even slightly from their established history. The Hybrid model fell in the middle, as the strong performance of the collaborative component was weighed down by the content-based component's failure.

![Hit Rate](../projects/MovieRecommendation/hit_rate_2.png?raw=true "width=70")
![Mean Reciprocal Rank](../projects/MovieRecommendation/mrr_2.png?raw=true "width=70")