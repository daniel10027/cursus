# Description
After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. You know that the API returns item-specific display-ready strings like 10.0% higher than in-store or 5.0% lower than in-store that inform users when the price of an item is different from the one in-store. But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

Your app lets a user decide the total amount x they are willing to pay via Instacart over in-store prices. This you call their price sensitivity.

Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated price sensitivity x.

Example

For prices = [110, 95, 70] notes = ["10.0% higher than in-store",          "5.0% lower than in-store",          "Same as in-store"] x = 5 the output should be isAdmissibleOverpayment(price, notes, x) = true;

In-store prices of the first and the second items are 100, and the price of the third item is 70, which means the customer is overpaying 10 - 5 + 0 = 5, which they are willing to do based on their price sensitivity.

For prices = [48, 165] notes = ["20.00% lower than in-store",          "10.00% higher than in-store"] x = 2 the output should be isAdmissibleOverpayment(price, notes, x) = false.

The in-store price of the first item is 60, and the second item is 150. The overpayment equals 15 - 12 = 3, which is too much for the customer to be willing to pay.

[input] array.float prices

Positive numbers, representing prices of the items in the shopping cart. [input] array.string notes

Array of the same length as prices. For each valid i notes[i] has one of the following forms: "x% higher than in-store", which means that Instacart price of the ith item is x% higher than the local one; "x% lower than in-store", which means that Instacart price of the ith item is x% lower than the local one; "Same as in-store", which means that the ith item costs the same in Instacart and in the local store, where x is a positive float number with the decimal point and at least one digit after it.

[input] float x

A non-negative integer, the maximum amount of money the customer is willing to overpay. [output] boolean

true if the overpayment is admissible, false otherwise.
