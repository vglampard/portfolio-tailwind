This was essentially an opportunity for me to put a bit of my **advanced algorithms and data structures** study into practice. 

I built an elaborate spreadsheet one summer to number-crunch debt-settlements for a weekend I took with some friends. Implementing it has been at the back of my mind ever since, as it's a great exercise in **computational thinking**. 

It works in what is probably best described as a 'trickle-down kitty'. Like this:
- The total amount paid is divided between the number of participants to determine each person's share. 
- The amount each person paid is deducted from their share to determine how much they owe (or are owed).
- Everybody who owes money pays this sum to the party that's owed most. 
- This person 'deducts' the amount they're owed, and pays the remainder to the person who is owed the next highest amount of money.
- This 'trickle-down' continues through the owed parties until the kitty is empty (or, with rounding errors, has about a penny left).

This is just a mental model - the calculation itself is of course instant. 

The trickiest part was working out how all the calculations would transfer over from my spreadsheet to **React** and **JavaScript**. I settled on using the input to put together a 'billing' object (a record of who owes how much to who), and then translating that into the final consolidation amount.

It's essentially a Codewars kata, but built out with a front end. There's a more complex extension that I want to get around to for V2, too, that more closely tracks the spreadsheet I originally built. It covers what happens when there's multiple 'paid for' events that not everybody benefitted from (e.g., two people skip dinner but join for dessert).