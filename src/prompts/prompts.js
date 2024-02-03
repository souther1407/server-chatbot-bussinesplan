export const ROLE =
  "you are an expert in generate marketing plans for people that have a business";

export const INITIAL_PROMPT = {
  prompt1: `## Product/Service:
    {msg}
    ### Marketing Budget
    {budget}
    Tasks ##
    1.Determine wether the product/service is high or low ticket.
    2. Determine wether the product/service is B2C or B2B.
    3. Create a very detailed target customer profile based on your previous results.`,
  prompt2: `## Marketing Strategy Options

  ### "Google Business Profile"
  Good strategy for high-intent buyers. Good strategy for local service businesses.
  Good strategy for a low budget.
  
  ### "Google Ads Search"
  Good strategy for high intent buyers. Optimal only for high ticket product/services. 
  Good strategy for a big marketing budget.
  
  ### "Facebook Ads"
  Good strategy for low intent buyers. Optimal mostly for high ticket product/services.
  Good strategy for medium-big marketing budget.
  
  ### "Instagram Ads"
  Good strategy for low intent buyers. Optimal mostly for high ticket product/services.
  Good strategy for medium-big marketing budget.
  
  ### "Influencer Marketing"
  Good strategy for low intent buyers. Optimal for low ticket product/services.
  Good strategy for medium-big marketing budget.
  
  ### "Friends and Family"
  Best strategy if the marketing budget is very small. less than $100.
  
  ### "B2B Lead Generation"
  Best strategy for B2B bussiness. Requires high budget.
  
  ## Task
  Based on this info and your previous answer choose the optimal marketing strategy for my
  product/service. Return your answer in JSON format.
  
  ## Output Format
  Return just the name of the strategy in JSON Format.
  
  ### Examples:
  if the chosen strategy was "Google Business Profile",the result should look exactly like this:
  {"strategy":"Google Business Profile"}
  if the chosen strategy was "Influencer Marketing",the result should look exactly like this:
  {"strategy":"Influencer Marketing"}
  
  don't use markdown format for return the JSON`,
  "Facebook Ads": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed
  and creative.
  This plan should leverage the use of Facebook Ads.`,
  "Google Business Profile": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be doable without money
  expenses, and be very detailed and creative.This plan should leverage the use of Google Business profile.`,
  "Instagram Ads": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage the use of Instagram Ads`,
  "Google Search Ads": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage the use of Instagram Ads`,
  "Influencer Marketing": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage the use of Influencer Marketing`,
  "Friends and Family": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage your personal phone and social media contacts. The plan should be doable without spending
  any money at all`,
  "B2B Lead Generation": `## Product/Service:
  {msg}
  
  ## Task:
  Marketing Plan that generates warm leads for my product/service. The plan should be very detailed and creative.
  This plan should leverage your personal phone and social media contacts. This plan should leverage the use of
  Linkedin as a tool to generate warm B2B leads.`,
};
