module Dionom where

class Dionom d where
	dempty :: d
	dappend :: d -> d -> d
	dconcat :: [d] -> d
	dconcat = foldr dappend dempty
