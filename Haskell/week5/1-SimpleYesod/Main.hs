{-# LANGUAGE TypeFamilies, QuasiQuotes, TemplateHaskell #-}

module Main where

import Yesod
import Render (render)
import Fractals (drawMandelbrot, drawJulia, screen)
import Codec.Picture (generateImage)
import Codec.Picture.Png (encodePng)

data App = App
instance Yesod App

mkYesod "App" [parseRoutes|
	/ HomeR GET
	/hello HelloR GET
	/hey/#String HeyR GET
	/mandlebrot/#Int/#Int MandlebrotR GET
	|]

getHomeR = defaultLayout $ [whamlet| <p> Hello World! |]

getHelloR :: MonadHandler m => m TypedContent
getHelloR = sendResponse $ toTypedContent (typePlain, toContent "Say Haskell!")

getHeyR name = defaultLayout $ [whamlet| <p> Hello #{name} |]

getMandlebrotR :: MonadHandler m => Int -> Int -> m TypedContent
getMandlebrotR w h = sendResponse $ toTypedContent (typePng, toContent (encodePng $ generateImage (render drawMandelbrot) w h) )

main = warpEnv App
