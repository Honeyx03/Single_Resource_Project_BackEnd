\c games_dev;

INSERT INTO games (name, players, category, cards_required,instructions) VALUES
('UNO', '2-10 Players', 'ages 7 and over', true,'each player has to put a single card from their hand onto the discard pile, but only if it has a matching colour, number or symbol'),
('Dominoes', '2-4 Players', '4 and up', false, ' If the tile you pick up from the draw pile matches something on the board, you can play it. If not, add the tile to your hand. The turn then passes to the next person'),
('Pictionary', '3-16 Players', 'ages 8 and up', false,'One player on a team picks a card and looks at the word matching the color of the space their pawn is on. The player has to sketch the prompt. The person sketching has 1 minute to draw the word without using letters or symbols. If their team guesses the word, they roll a die and move around the board' );