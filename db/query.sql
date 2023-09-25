SELECT book_name, price
FROM favorite_books
JOIN book_prices
ON book_prices.id = favorite_books.book_price;