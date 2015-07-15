{-# LANGUAGE TypeFamilies, QuasiQuotes, TemplateHaskell, ViewPatterns #-}

module Main where

import Yesod
import Render (render)
import Fractals (drawMandelbrot)
import Codec.Picture (encodePng, generateImage)

data App = App
instance Yesod App

mkYesod "App" [parseRoutes|
	/ HomeR GET
	/hello HelloR GET
	/hey/#String HeyR GET
	/mandlebrot MandlebrotR GET
	/mandlebrot/#Int/#Int MandlebrotSizedR GET
	|]

getHomeR = defaultLayout $ [whamlet| <p> Hello World! |]

getHelloR :: MonadHandler m => m TypedContent
getHelloR = sendResponse $ toTypedContent (typePlain, toContent "Say Haskell!")

getHeyR name = defaultLayout $ [whamlet| <p> Hello #{name} |]

getMandlebrotR :: MonadHandler m => Int -> Int -> m TypedContent
getMandlebrotR = sendResponse $ toTypedContent
	(typePng, toContent (encodePng $ generateImage (render (drawMandelbrot 600 600)) 600 600))

getMandlebrotSizedR :: MonadHandler m => Int -> Int -> m TypedContent
getMandlebrotSizedR w h = sendResponse $ toTypedContent
	(typePng, toContent (encodePng $ generateImage (render (drawMandelbrot w h)) w h))

main = warpEnv App
