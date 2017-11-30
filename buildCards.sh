# Clear the file
truncate -s 0 cards.js

# Begin the JS object
echo "var cards = [" >> cards.js

# Read the card file
cat cardlist.txt | while read line
do
	# Remove spaces
	card=$( printf "%s\n" "$line" | sed 's/ /%20/g' )
	# Go get the cards details
	cardDetails=$(curl 'https://api.scryfall.com/cards/named?exact='$card);
	# write this data to the file
	echo $cardDetails >> cards.js
	# Do Array stuff
	echo ", " >> cards.js
done

echo "]" >> cards.js
