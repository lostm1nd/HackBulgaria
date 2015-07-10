{-# OPTIONS_GHC -fwarn-incomplete-patterns #-}

type Name = String
type BirthYear = Int
type RecordLabel = String

data Author = Author Name BirthYear
			| AuthorInLabel Name BirthYear RecordLabel
	deriving (Eq, Show)

type Title = String
type Genre = String
type Length = Double

data Song = Song Title Author Genre Length
	deriving (Eq, Show)

type MusicLibrary = [Song]

addSong :: MusicLibrary -> Song -> MusicLibrary
addSong ml s = ml ++ [s]

removeSong :: MusicLibrary -> Song -> MusicLibrary
removeSong ml s = filter (/= s) ml

removeByAuthor :: MusicLibrary -> Author -> MusicLibrary
removeByAuthor ml a = filter (\(Song _ a' _ _) -> a /= a' ) ml
