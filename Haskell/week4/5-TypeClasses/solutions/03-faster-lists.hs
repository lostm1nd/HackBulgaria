{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

-- i is the index type, while a is the value type in the list
data List i a = Append i (List i a) (List i a) | Entry a | Nil
	deriving (Show)

appendLists :: Num i => List i a -> List i a -> List i a
appendLists l1 l2 = Append (index l1 + index l2) l1 l2

index :: Num i => List i a -> i
index (Append i _ _) = i
index (Entry _) = 1
index Nil = 0
