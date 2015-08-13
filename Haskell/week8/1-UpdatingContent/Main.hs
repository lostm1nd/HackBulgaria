{-# LANGUAGE OverloadedStrings #-}
module Main where

import Network.HTTP.Conduit
import Text.HTML.TagSoup
import qualified Data.ByteString.Lazy as L

main :: IO ()
main = do
	html <- simpleHttp "https://leanpub.com/gameinhaskell"
	L.writeFile (innerText (parseTags html))
