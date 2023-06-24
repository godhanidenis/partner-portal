export enum Description {
  HandlingTimeConflict = `Handling time is the time taken by you to ship the product once the customer has placed an order. You have currently updated with us a specific handling time for each individual SKU. When products are offered for sale, an expected ship date as well as an expected delivery date is also committed to the customer. The expected ship & delivery dates are calculated based on the handling time provided by you. A lower handling time leads to higher sales as customers expect items to reach them faster.\n
  <br><br>
  However, For these products in your catalog, where there is currently no FBA offer and they must drop ship directly from your shipping facility, the handling time already updated on Amazon conflicts with the handling time provided to us. This will result in customer confusion and a potential decrease in sales.<br>
  <br>
  If the Handling Time provided to 123Stores is incorrect, kindly edit the handling time. If you're unhappy with the handling time that is being offered by the conflicting provider, contact the conflicting provider, and get them to correct their handling time, so that customer confusion is avoided. Once the conflicting provider corrects their handling time, the product offers will be automatically updated. 
  `,
  UnitPriceConflict = `
  Prices will always change. But with price stability, consumers will be able to make more informed decisions about their purchases. Every product has a perceived value and if a product is available at different prices that vary too much, it could result in harming customer trust in the product. Imagine a product retailing at $100.00, and then more retail offers of the same product ranging from $100.00 to $175.00, you as a consumer would lose confidence about the true value of the product, resulting in customer confusion and a potential decrease in sales.
  <br><br>
  However, For these products in your catalog, where there is currently no FBA offer and they must drop ship directly from your shipping facility, the unit price provided to 123Stores exceeds the retail price already updated on Amazon.
  <br><br>
  If the Unit Price provided to 123Stores is incorrect, kindly edit the Unit Price. If you're unhappy with the retail price that is being offered by the conflicting provider, contact the conflicting provider, and get them to correct their retail price, so that customer confusion is avoided. Once the conflicting provider corrects their retail price, the product offers will be automatically updated.
  `,
  MAPConflict = `Implementing MAP loosely is one of the worst outcomes for a brand, driving sales from authorized partners to unauthorized resellers (increasing chances of counterfeit replacements) & compromising consumer confidence in the brand's value proposition. If implemented, being consistent & standing by MAP guidelines, regardless of the violator or the extent of the violation leads to the best results.
  <br><br>
  However, For these products in your catalog, where there is currently no FBA offer and they must drop ship directly from your shipping facility, the retail price already updated on Amazon is lower than the MAP provided to 123Stores.
  <br><br>
  If the MAP provided to 123Stores is incorrect, kindly edit the MAP Price. To remove MAP from a particular SKU, simply update MAP as $0 for that SKU. If you're unhappy with the retail price that is being offered by the conflicting provider, contact the conflicting provider, and get them to correct their retail price, so that customer confusion is avoided. Once the conflicting provider corrects their retail price, the product offers will be automatically updated.
  `,
  AmazonASINOfferIncomplete = `For these products in your catalog, you have not updated an Amazon ASIN against the MPN. Without an Amazon ASIN a product cannot be offered for sale. 
  <br><br>
  123Stores is able to generate some Amazon ASIN recommendations. However, you must verify that the description of the product mentioned in the Amazon product detail page matches the actual product so that a Mis-Ship is avoided. Only on your confirmation, will these MPN-ASINs combinations be updated. If you already have the Amazon ASIN handy, you can update that, irrespective of the receommendation. 
  `,
  StrandedInCatalog = `These are products that are in your catalog but missing from the inventory feed. These can be made active by adding them to the inventory feed. If the products are discontinued and will never be coming back, you can edit the product status to "Discontinued". If you would not like 123Stores to sell these products, you can edit the product status to "Partner Restricted".`,
  DiscontinuedProducts = `These are products that you asked us to mark as "Discontinued" in the past. These are currently not being offered for sale. If any of these are in stock, and if you would like for us to sell them, you can edit the product status to "Active". If you would not like 123Stores to sell these products, you can edit the product status to "Partner Restricted".`,
  PriceCorrection = `It is important to retail products with fairly consistent pricing on Amazon & other channels to build customer confidence and maintain brand image.
  <br><br>
  These products have not got a single sale in the last 3 months, and we are listed at a price that is much higher than the current retail price on Amazon. The Possible Reasons could be Incorrect Pricing (Prices not updated), Higher Pricing Slab (Partner not encouraging dropship), Promotion not provided, No Co-Op Allowance or No Rebate.
  <br><br>
  We have recommended a Discount or Promotion % required to make these products competitive. If the Unit Price provided to 123Stores is incorrect, kindly edit the Unit Price. 
  `,
  LackOfSalesDemand = `It is important to retail products with fairly consistent pricing on Amazon & other channels to build customer confidence and maintain brand image.
  <br><br>
  These products have not got a single sale in the last 3 months, and we are listed at the best retail price on Amazon already. The Possible Reasons could be Brand's competing products are priced lower, No demand, Incorrect Pricing (Prices not updated), Higher Pricing Slab (Partner not encouraging dropship), Promotion not provided, No Co-Op Allowance or No Rebate.
  <br><br>
  We have recommended a Discount or Promotion % required to check which products have the potential to sell. If the Unit Price provided to 123Stores is incorrect, kindly edit the Unit Price.
  `,
  ProductsLosingImportanceOnAmazon = `It is important to retail products with fairly consistent pricing on Amazon & other channels to build customer confidence and maintain brand image.
  <br><br>
  These products have not got a single sale in the last 3 months, and Amazon has removed the Buybox from the page due to higher retail price listed viz a viz other retail websites. The Possible Reasons could be Promotion running on other sales channels, Brand was running a promotion and has stopped the promotion, causing the retail price to rise, Brand has recently increased prices or Brand's competing products are priced lower
  <br><br>
  We have recommended a Discount or Promotion % required to check which products have the potential to get the Buybox reinstated. If the Unit Price provided to 123Stores is incorrect, kindly edit the Unit Price.
  `,
}
