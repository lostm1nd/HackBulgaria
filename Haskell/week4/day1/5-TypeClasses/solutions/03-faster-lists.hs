{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

-- i is the index type, while a is the value type in the list
data List i a = Nil | Entry a | Append i (List i a) (List i a)

instance Show a => Show (List i a) where
	show Nil = ""
	show (Entry x) = show x
	show (Append _ l1 l2) = show l1 ++ "~" ++ show l2

addEntry :: (Ord i, Eq i, Num i) => List i a -> i -> a -> List i a
addEntry Nil _ x = Entry x
addEntry (Entry y) 0 x = Append 2 (Entry x) (Entry y)
addEntry (Entry y) _ x = Append 2 (Entry y) (Entry x)
addEntry (Append i l1 l2) idx x
	| idx < i = Append (i + 1) (addEntry l1 idx x) l2
	| otherwise = Append (i + 1) l1 (addEntry l2 (index l1 - idx) x)

getEntry :: (Ord i, Eq i, Num i) => List i a -> i -> Maybe a
getEntry Nil _ = Nothing
getEntry (Entry x) _ = Just x
getEntry (Append 2 (Entry x) _) 0 = Just x
getEntry (Append 2 _ (Entry x)) 1 = Just x
getEntry (Append i l1 l2) idx
	| idx < index l1 = getEntry l1 idx
	| otherwise = getEntry l2 (index l1 - idx)

-- removeEntry :: (Ord i, Eq i, Num i) => List i a -> i -> Maybe a
-- removeEntry Nil _ = Nothing
-- removeEntry (Entry x) _ = Just x

appendLists :: Num i => List i a -> List i a -> List i a
appendLists l1 l2 = Append (index l1 + index l2) l1 l2

toList :: List i a -> [a]
toList Nil = []
toList (Entry x) = [x]
toList (Append _ l1 l2) = toList l1 ++ toList l2

index :: Num i => List i a -> i
index (Append i _ _) = i
index (Entry _) = 1
index Nil = 0
