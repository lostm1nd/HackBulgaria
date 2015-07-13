{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

-- i is the index type, while a is the value type in the list
data List i a = Nil | Entry a | Append i (List i a) (List i a)
	deriving (Show)

appendLists :: Num i => List i a -> List i a -> List i a
appendLists l1 l2 = Append (index l1 + index l2) l1 l2

index :: Num i => List i a -> i
index (Append i _ _) = i
index (Entry _) = 1
index Nil = 0

addEntry :: (Ord i, Eq i, Num i) => List i a -> i -> a -> List i a
addEntry Nil _ x = Entry x
addEntry (Entry y) 0 x = Append 2 (Entry x) (Entry y)
addEntry (Entry y) _ x = Append 2 (Entry y) (Entry x)
addEntry (Append i l1 l2) idx x
	| idx < i = Append (i + 1) (addEntry l1 idx x) l2
	| otherwise = Append (i + 1) l1 (addEntry l2 (index l1 - idx) x)

-- getEntry :: List i a -> i -> Maybe a
-- getEntry Nil _ = Nothing
-- getEntry (Append i l1 l2) idx
-- 	| idx < i =
