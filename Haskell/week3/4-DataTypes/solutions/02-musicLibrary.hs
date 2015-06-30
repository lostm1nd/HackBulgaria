type Name = String
type BirthYear = Int
type RecordLabel = String

data Author = Author Name BirthYear
	| Author' Name BirthYear RecordLabel

type Title = String
type Genre = String
type LengthInSeconds = Int

data Song = Song Title Author Genre LengthInSeconds

data MusicLibrary = MusicLibrary [Song]
