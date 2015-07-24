module Parser where

import Control.Applicative

newtype Parser a = Parser { parse :: String -> Maybe (a, String) }

satisfy :: (Char -> Bool) -> Parser Char
satisfy p = Parser f
    where f (x:xs) = if p x then Just (x, xs) else Nothing

char :: Char -> Parser Char
char c = satisfy (\x -> x == c)

openingBrace :: Parser Char
openingBrace = char '('

closingBrace :: Parser Char
closingBrace = char ')'

inBraces :: Parser a -> Parser a
inBraces p = openingBrace *> p <* closingBrace

-- fmap :: (a -> b) -> (String -> Maybe (a, String)) -> (String -> Maybe (b, String))
instance Functor Parser where
  fmap f (Parser p) = Parser fp
    where fp xs = fmap (\(a, y) -> (f a, y)) (p xs)

-- (<*>) :: Parser (a -> b) -> Parser a -> Parser b
instance Applicative Parser where
  pure a = Parser (\s -> Just(a, s))
  Parser f <*> Parser a = Parser pb
    where pb str = case f str of
                        Just(a2b, xs) -> fmap (\(a, y) -> (a2b a, y)) (a xs)
                        Nothing -> Nothing

instance Alternative Parser where
  empty = Parser (\_ -> Nothing)
  l <|> r = Parser (\str -> parse l str <|> parse r str)

oneOrMore :: Parser a -> Parser [a]
oneOrMore p = (:) <$> p <*> zeroOrMore p

zeroOrMore :: Parser a -> Parser [a]
zeroOrMore p = oneOrMore p <|> pure []
