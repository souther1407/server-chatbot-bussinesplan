export const ROLE =
  "you are an expert in generate marketing plans for people that have a business";

export const INITIAL_PROMPT = {
  prompt1: `## Product/Service:
    {msg}
    ### Marketing Budget
    {budget}
    Tasks ##
    1.Determine whether the product/service is high or low ticket. Think deeply before coming up with an answer.
    2. Determine whether the product/service is B2C or B2B.
    3. Create a very detailed target customer profile based on your previous results. Think of the tipical buying intention of this Product/Service customer.`,
  prompt2: `## Marketing Strategy Options

  ### “Facebook Ads (Website Visitors)”
Good strategy for a medium to big marketing budget. It is the cheapest option, but not the best one for conversions. Optimal objective if you just want website traffic. Great Strategy if you have a high-conversion landing page. Lower quality lead prospects, but cheaper ones.
Buying Intention: Medium to High
Product Ticket Size: Can be both medium and high
Business Locality: Not specific; suitable for both local and global
Sales Cycle Stage: Awareness/Interest
Customer Profile: Users seeking information or solutions, possibly unaware of their need for the product/service until they find it. Ideal for businesses looking to increase traffic and visibility, regardless of ticket size, by capturing early-stage users who are just beginning their research.

### “Facebook Ads (Calls)”
Good strategy for a medium to big marketing budget. Optimal for service-based businesses where the eventual conversion happens offline. Optimal for businesses where the prospect books a call. Works well with Meta Pixel since you can track those actions which will allow Meta’s machine learning algorithm to further optimize your campaign.
Buying Intention: High
Product Ticket Size: Usually high
Business Locality: Local, service-based
Sales Cycle Stage: Consideration/Decision
Customer Profile: Individuals needing personalized assistance or services, such as consulting, home services, or custom products. They prefer direct interaction before finalizing a purchase, indicating a readiness to convert.

### “Facebook Ads (Boost Facebook Content)”
Good strategy for a medium to big marketing budget. Designed to get you social interaction on FacebookGood for Posts not for Stories. Good for redirecting people into a Facebook Group. Good to figure out who your target audience is, by identifying the audience demographics that tend to interact with your content. This is good for businesses that have a product but not a defined target customer profile.
Buying Intention: Low
Product Ticket Size: Medium
Business Locality: Not specific
Sales Cycle Stage: Awareness
Customer Profile: Broad audience with varied interests, useful for businesses looking to engage and expand their reach. Effective for identifying potential customer demographics and interests, especially for businesses still defining their target market.

### “Facebook Ads (Messenger Messages)”
Good strategy for a medium to big marketing budget. Optimal for service-based businesses where the eventual conversion happens thorugh text messages. Optimal if you have a predetermined sales-script. Works well with Meta Pixel since you can track those actions which will allow Meta’s machine learning algorithm to further optimize your campaign.
Buying Intention: Medium to High
Product Ticket Size: Can be both low and high
Business Locality: Suitable for both local and global
Sales Cycle Stage: Consideration/Decision
Customer Profile: Users who prefer quick, personalized communication. They are in the consideration stage but need questions answered or reassurance before making a purchase. Effective across various industries and product ticket sizes.

### “Facebook Ads (WhatsApp Message)”
Good strategy for a medium to big marketing budget. Optimal for service-based businesses where the eventual conversion happens thorugh text messages. Optimal if you have a predetermined sales-script. Works well with Meta Pixel since you can track those actions which will allow Meta’s machine learning algorithm to further optimize your campaign.
Buying Intention: Medium to High
Product Ticket Size: Can be both low and high
Business Locality: Highly effective for local but also applicable globally
Sales Cycle Stage: Consideration/Decision
Customer Profile: Similar to Messenger Messages, but specifically targets users in regions or demographics where WhatsApp is a predominant communication tool. They value direct and personal interaction before committing to a purchase.

### “Facebook Ads (Instagram Messages)”
Good strategy for a medium to big marketing budget. Optimal for service-based businesses where the eventual conversion happens thorugh text messages. Optimal if you have a predetermined sales-script. Works well with Meta Pixel since you can track those actions which will allow Meta’s machine learning algorithm to further optimize your campaign.
Buying Intention: Medium
Product Ticket Size: Usually low to medium
Business Locality: Not specific
Sales Cycle Stage: Consideration
Customer Profile: Younger demographics engaged on Instagram, responsive to direct, personalized outreach. They are likely influenced by visual content and may require a nudge to move towards a purchase.

### “Facebook Ads (Page Likes)”
Good strategy for a medium to big marketing budget. Not a cost-efficient way to grow your brand. It is good for longer sales cycles. Good first step to turn a cold prospect into a warm lead, however, you need a bigger budget to execute this type of Ad strategy, since it takes time. Only good if you have an optimized Facebook Page.
Buying Intention: Low
Product Ticket Size: Low to Medium
Business Locality: Not specific
Sales Cycle Stage: Awareness
Customer Profile: Individuals at the top of the funnel, not yet ready to purchase but open to learning more about your brand. This strategy is about building a foundation for long-term engagement and nurturing.

### “Facebook Ads (Leads)”
Good strategy for a medium to big marketing budget. Create an Ad that request contact details from potential customers. Optimal for service-based businesses where the eventual conversion happens offline. Optimal for businesses where the prospect books a call, or a quote, and the conversion happens through a zoom call or a call. Works well with Meta Pixel since you can track those actions which will allow
Meta’s machine learning algorithm to further optimize your campaign.
Buying Intention: High
Product Ticket Size: Usually high
Business Locality: Suitable for both local and global
Sales Cycle Stage: Consideration/Decision
Customer Profile: Users who have demonstrated interest in your product or service and are willing to share their contact information. They are closer to the decision stage and are likely evaluating options, making them prime candidates for targeted follow-up and conversion.

### “Google Business Profile”
Target Audience: High-intent buyers and local service seekers.
Product/Service Suitability: Highly effective for local services and businesses seeking to increase local awareness and drive foot traffic.
Budget: Ideal for businesses with limited marketing budgets. The platform itself is free, but businesses can opt for paid promotions to increase visibility.
Key Advantage: Direct connection with customers in your local area at the moment they are searching for your products or services.

### “Google Ads Search”
Target Audience: Buyers with specific intent, including those searching for products, services, or solutions.
Product/Service Suitability: Optimal for high ticket items where the customer's decision process is more deliberate and informed.
Budget: Requires a larger budget to compete effectively, especially in high-competition niches. However, with strategic keyword selection and targeting, it can be adapted to smaller budgets.
Key Advantage: Captures users at the moment of high intent, directly influencing the purchasing decision process.

### “Instagram Story Ads”
Buying Intention: Low.
Product Ticket Size: Medium to High
Business Locality: Suitable for both local and global
Budget: Good for medium and big marketing budgets
Customer Profile: Instagram Users that regularly scroll thorugh Instagram stories.

### “Influencer Marketing: Paid Post”
Target Audience: Instagram Users. Primarily female, B2C consumers across various age groups.
Budget: Medium to High. Requires a significant investment to secure posts from influencers with large, engaged followings. Best for brands with the budget to invest in influencers who can reach broad or highly targeted female audiences, ensuring quality content that aligns with the brand’s message.
Buying Intention: Medium to High, driven by trust in the influencer.
Product Ticket Size: Versatile, effective for both low and high-ticket items.
Business Locality: Global or local, depending on the influencer's reach.
Sales Cycle Stage: Consideration to Decision, as endorsements can swiftly influence purchasing decisions.
Strategy Insight: Particularly effective for brands targeting female demographics with products that benefit from visual demonstration or personal endorsement, such as beauty, fashion, wellness, and lifestyle products.

### “Influencer Marketing: Giveaways and Contests”
Target Audience: Instagram Users. Broad female audience, particularly effective for engaging younger demographics.
Budget: Medium to High. While the direct costs of products or services given away can be moderate, the operational and promotional expenses can add up. This strategy suits brands willing to invest in engagement and data collection efforts, appealing to a wide female audience interested in the chance to win something.
Buying Intention: Low to Medium, leveraging the excitement of potentially winning.
Product Ticket Size: Low to Medium, with giveaways often featuring accessible products.
Business Locality: Can be effective both locally and globally, tailored to the influencer's audience.
Sales Cycle Stage: Awareness to Consideration, ideal for attracting new followers and introducing them to the brand.
Strategy Insight: Engages and expands female-centric audiences, especially for brands looking to increase visibility and engagement quickly, such as in beauty, fashion, and lifestyle sectors.

### “Influencer Marketing: Store Credit”
Target Audience: Instagram Users. Local female consumers, especially relevant for businesses like boutiques, salons, and dining establishments.
Budget: Low. Cost-effective for local businesses looking to increase foot traffic and visibility with minimal upfront expense. Particularly suitable for restaurants, bars, and boutiques targeting female consumers, leveraging local influencers to create buzz and trial opportunities.
Buying Intention: Medium, as the offer of store credit incentivizes visits and purchases.
Product Ticket Size: Low to Medium, encouraging trial and repeat patronage.
Business Locality: Local, maximizing the influencer's community impact.
Sales Cycle Stage: Consideration, directly encouraging trial and experience sharing.
Strategy Insight: Effective for local businesses seeking to attract female customers through the endorsement of local influencers, enhancing community-based visibility and trust.

### “Influencer Marketing: Gift”
Target Audience: Instagram Users. Female audience with specific interests aligned with the product categories.
Budget: Low. Involves the cost of the product and shipping, making it a budget-friendly option for brands to get their products into the hands of influencers. Effective for generating organic content and reviews, especially for products that resonate with female audiences, such as beauty and wellness products.
Buying Intention: Medium, as gifted products introduce and familiarize the brand to the audience.
Product Ticket Size: Flexible, from low to high-ticket items.
Business Locality: Not specific, adaptable to both local and international brands.
Sales Cycle Stage: Awareness to Consideration, leveraging the authenticity of the influencer's experience.
Strategy Insight: Suitable for brands offering products that require demonstration or personal testimony, such as skincare, makeup, fashion, and health and wellness products, to build credibility and interest among women.

### “Influencer Marketing: Paid Trip”
Target Audience: Instagram Users. Female audience interested in travel, luxury, and lifestyle.
Budget: High. One of the most expensive strategies, suitable for luxury brands or those looking to create aspirational content with high production value. Targets affluent female audiences through experiences that highlight the brand’s lifestyle or premium offerings.
Buying Intention: Medium, leveraging aspirational content to build brand association.
Product Ticket Size: High, associated with luxury and exclusive experiences.
Business Locality: Global, especially for destination brands or luxury products.
Sales Cycle Stage: Consideration, creating aspirational associations to influence future decisions.
Strategy Insight: Highly effective for high-end brands targeting affluent female consumers, offering travel, luxury goods, or exclusive experiences, where the influencer's journey underscores the brand's value proposition. Works the best with Macro and Mega Influencers.

### “Influencer Marketing: Affiliate Campaign”
Target Audience: Instagram Users. Budget-conscious female consumers looking for recommendations with added value, such as discounts.
Budget: Flexible (Small to Big). Versatile in budgeting, as costs are often performance-based, paying commissions on sales or actions taken. This strategy can scale with the campaign's success, making it suitable for a wide range of products and appealing to influencers keen on long-term partnerships. Effective for products that benefit from genuine recommendations, such as fashion, beauty, and health
products targeting women.
Buying Intention: Medium to High, motivated by the influencer's endorsement and the incentive of a discount.
Product Ticket Size: Typically low to medium, making the purchase decision easier.
Business Locality: Broadly applicable, suitable for e-commerce and direct-to-consumer brands.
Sales Cycle Stage: Consideration to Decision, with affiliate incentives encouraging immediate action.
Strategy Insight: Ideal for female-centric B2C products where influencers can authentically recommend products, such as in beauty, fashion, home goods, and wellness, with the added appeal of a promotional offer to drive. Works the best with Nano and Micro Influencers since they have more engaged followers.

### “Friends and Family”
Target Audience: Your phone or social media contacts.
Product/Service Suitability: Optimal for any type of product
Budget Considerations: Optimal if the budget is less than $100, or no existent.

### “Linkedin Lead Generation”
Best strategy for B2B businesses. Requires a high budget.

### “Google Maps Ads”
Good strategy for a medium to big marketing budget.
Buying Intention: High
Product Ticket Size: Low to High
Business Locality: Local
Sales Cycle Stage: Decision
Customer Profile: Google Ads Maps appeals to users actively searching for products or services near them, demonstrating high buying intention. This platform suits businesses of all sizes offering local services or products, mainly retail stores or professional services. Customers are typically ready to make a purchase or visit a business, prioritizing convenience, proximity, and immediate need fulfillment.

### “Facebook Marketplace”
Good strategy for low to non-existent budget.
Buying Intention: High
Product Ticket Size: Low to Medium
Business Locality: Local
Sales Cycle Stage: Consideration to Decision
Customer Profile: Users on Facebook Marketplace are typically in a transactional mindset with high buying intention, looking for specific items to purchase locally. The platform is ideal for businesses and individuals selling low to medium ticket consumer goods, from second-hand items to new products at competitive prices. The customer profile includes local shoppers seeking deals, convenience, and the ability
to easily buy locally.

## Task
You already determined whether my product/service is high or low ticket, whether it is B2C or B2B, and created a customer profile of my ideal target customer, based on all that information as well as the information about diffferent marketing strategies I am giving to you, choose the optimal marketing strategy for my product/service. Consider whether my product is high-ticket, or low-ticket, consider my
marketing budget. Return your answer in Json format.

## Output Format
Return just the name of the strategy in Json Format.

### Examples:
If the chosen strategy was “Google Business Profile”, the result should look exactly like this:
{"strategy": "Google Business Profile"}
If the chosen strategy was “Influencer Marketing: Store Credit”, the result should look exactly like this:
{"strategy": "Influencer Marketing: Store Credit"}

  don't use markdown format for return the JSON`,
  "Facebook Ads (Website Visitors)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Website Visitors
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Website Visitors” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Website Visitors
  as the objective works.`,
  "Facebook Ads (Boost Facebook Content)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Boost Facebook Content
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Boost Facebook Content” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Boost Facebook
  Content as the objective works.`,
  "Facebook Ads (Calls)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Calls
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Calls” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Calls as the
  objective works.`,
  "Facebook Ads (Messenger Messages)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Messenger Messages
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Messenger Messages” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Messenger
  Messages as the objective works.`,
  "Facebook Ads (WhatsApp Message)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: WhatsApp Message
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “WhatsApp Message” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with WhatsApp
  Message as the objective works.`,
  "Facebook Ads (Instagram Messages)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Instagram Messages
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Instagram Messages” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Instagram
  Messages as the objective works.`,
  "Facebook Ads (Page Likes)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Page Likes
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Page Likes” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Page Likes as the
  objective works.`,
  "Facebook Ads (Leads)": `### Marketing Strategy:
  Facebook Ads
  Facebook Ads Campaign Objective: Leads
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running a Facebook Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Facebook Ads
  with “Leads” as the campaign objective is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how a Facebook Ads campaign with Leads as the
  objective works.`,
  "Instagram Story Ads": `### Marketing Strategy:
  Instagram Ads
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of running an Instagram Story Ads campaign for my Product/Service, start by clearly stating what the strategy is and convincingly explain why Instagram Story Ads is the perfect
  strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and professionally oriented. Show a
  very advanced understanding of my target customer, my Product/Service, and how an Instagram Ads works.`,
  "Influencer Marketing: Paid Post": `### Marketing Strategy:
  Influencer Paid Post
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of paying influencers for brand post about my Product/Service, start by clearly stating what the strategy is and convincingly explain why Influencer Paid Posts is the perfect strategy
  for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and professionally oriented. Show a
  very advanced understanding of my target customer, my Product/Service, and how an Influencer Paid Post works.`,
  "Influencer Marketing: Giveaways and Contests": `### Marketing Strategy:
  Influencer Giveaways and Contests
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of paying influencers to lead a Giveaways/Contests for my new Product/Service,start by clearly stating what the strategy is and convincingly explain why Influencer Giveaways and
  Contests are the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and professionally oriented. Show a
  very advanced understanding of my target customer, my Product/Service, and how an Influencer Giveaway/Contests works.`,
  "Influencer Marketing: Store Credit": `### Marketing Strategy:
  Giving Store credit to influencers in exchange for an Instagram Story or Reel.
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of giving Store credit to influencers in exchange for an Instagram Story or Reel about my Product/Service, start by clearly stating what the strategy is and convincingly explain why
  this is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and professionally oriented. Show a
  very advanced understanding of my target customer, my Product/Service, and how my chosen strategy works.`,
  "Influencer Marketing: Gift": `### Marketing Strategy:
  Giving free samples of my product to influencers in exchange for an Instagram Story or Reel.
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of giving free samples of my product to influencers in exchange for an Instagram Story or Reel about my Product/Service, start by clearly stating what the strategy is and convincingly
  explain why this is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very thoughtful list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and professionally oriented. Show
  a very advanced understanding of my target customer, my Product/Service, and how my chosen strategy works.`,
  "Influencer Marketing: Paid Trip": `### Marketing Strategy:
  Influencer Brand Paid Trip
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of doing a luxury Influencer Brand Paid Trip. Start by convincingly explain why this is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how Influencer paid Trips work.`,
  "Influencer Marketing: Affiliate Campaign": `### Marketing Strategy:
  Influencer Affiliate Marketing Campaign
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of doing an Influencer Affiliate Marketing Campaign. Start by convincingly explain why this is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to execute the perfect campaign for my specific product. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how an Influencer Affiliate Marketing Campaign works.`,
  "Facebook Marketplace": `### Marketing Strategy:
  Selling my product locally on Facebook Marketplace
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of selling my product locally on Facebook Marketplace. Start by convincingly explain why this is the perfect strategy for my specific Product/Service.
  Then come up with a creative and very detailed list of tips for me to sell my specific product on Facebook Marketplace. These tips should be very detailed and
  professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how selling on Facebook Marketplace works.`,
  "Friends and Family": `### Marketing Strategy:
  Selling my product/Service to my phone and social media contacts.
  ## Product/Service:
  {msg}
  ## Task:
  I am thinking of offering my product/Service to my phone and social media contacts. Start by convincingly explain why this is the perfect strategy for my specific
  Product/Service.
  Then come up with a creative and very detailed list of tips for me to succesfully offer my product/Service to my phone and social media contacts. These tips should
  be very detailed and professionally oriented. Show a very advanced understanding of my target customer, my Product/Service, and how to iterate on my offer
  thorugh an small initial amount of Feedback.`,
  "Google Business Profile": `## Product/Service:
  {msg}
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be doable without money
  expenses, and be very detailed and creative. This plan should leverage the use of Google Business profile.`,
  "Google Ads Search": `## Product/Service:
  {msg}
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage the use of Google Ads Search.`,
  "Linkedin Lead Generation": `## Product/Service:
  {msg}
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage your personal phone and social media contacts. This plan should leverage the use of
  Linkedin as a tool to generate warm B2B leads.`,
};
