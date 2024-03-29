
# ***Alpha Stage***

# Alpha 1.0 - First version
- added original Texture (black and white)
- added cube player with basic platformer mechanics such as moving horizontally and jumping.
- added ground
- added camera to follow player
- game named "Simple cube platformer example"

# Alpha 1.1 - The cube update
- added smooth acceleration, decceleration for a sliding effect/slowing down in the air
- added the down key used to change form ro a squashed version of the cube, resulting in increased fall speed
- added visual wall to the left and to the right, but they have no purpose yet

# Alpha 1.2 - The room update
- made camera x position limits to the right, thereby creating an official room area
- removed right wall
- added left wall acting like a wall
- added walljump ability on left wall
- added the dot, which teleports to random x location with in the room

# Alpha 1.3 - The box spawning update
- added box set up algorithm, activated by the dot.
- boxes are only visual now, but they get destroyed upon collecting the dot again
- there will always only be 4 box stacks with 1- 4 layers on each
- game renamed to Block Smasher, anticipating the future of the boxes

# Alpha 1.4 - The booming update
- added screenshake, which happens at a magnitude depending how hard you ground pound onto the ground
- added sound effects, such as ground shake, jump, thrust, and dot collect

- -- -- -- -- -- -Beta Stage- -- -- -- -- -- -

# Beta 1.0 - The box physics update
- game renamed to Bloquake
- added box physics, so now they act as walls and platforms.
- added box smashing feature
- dot now hides when collected, and reappears when all boxes are destroyed

# Beta 1.1 - The gui update
- added stages, which increase box spawning rates, and box height range
- added scoring system, increased by doing various acts
- added the gui, which displays these two things plus how many boxes are left
- extended room width somewhat
- going too far right will now teleport you back

# Beta 1.2 - The enemy update
- added bad cubes, the first enemy of the game - they follow you and disobey gravity, and increase speed when you decrease speed
- added random spawning of enemies, in addition to the ones that spawn each level
- added bad cubes climbing on top of eachother feature
- added box smashing animation
- changed sound effect for dot collect
- added reset feature , activated when going too far right
- added a secret... can you find it?
- this is the first tested version.

# Beta 1.3 - The bug fixing update
- fixed bugs: enemy follow algorithm (they were shaking), ground pound going into ground, and box stack physics algorithm (player gets pushed out whilst moving inside a box)
- reset feature now resets differently - giving you mercy if you had 1 or 2 boxes left and letting you go on, or no mercy if you tried skipping levels thereby deducting a stage, so you have to replay it properly
- added bad cube dying animation
- altered spawning algorithm
- added console log messages for accomplishments, such as stage completion
- added mystery boxes - but they are just visually different boxes for now

# Beta 1.4 - The colour update
- made a new texture! (colour) this is now the default texture, for now the only way to have black and white (it wasn't deleted) is to hold this keybind: "b" + "w" before the script runs, so that a statement will run true at the very start of the script
- changed initial height offset of all boxes and bad cubes.
- added white outline to gui text. 
- rearranged gui

# Beta 1.5 - The health update
- added health system
- enemies now deduct health, not points
- added hearts to gui and heart display algorithm
- now in addition to giving you points collecting dots and mystery boxes give you health.
- rearranged gui
- changed the "stage <stage # # " in gui to show an S icon instead of the text "stage"
- changed the "boxes left <boxes # # " in gui to show an box icon instead of the text "stage"
- player now gets destroyed when hp reaches 0 (max hp is 1000).
- this is the second tested version
# Beta 1.5.1 - temporary death
- fixed the death sequence placeholder, as before it wasn't even functioning due to a miscalled function

# Beta 1.6 - The pause menu update
- changed bad cube's (square enemy - soon there will be others) speed and following algorithms as well as their spawning rates
- fixed Gui issues
- hastened the tile setup
- special boxes now give from 25 to 100 hp.
- added the pause feature
- added the pause menu which slides in and slides out
- added options selection on the pause menu: unpause (this is an alternative for just pressing 'p' again), stats, and restart.
- added stats page, which shows all the statistics of the curent game
- added restart ability, which lets the player restart the game
- death sequence now pauses, forcing players to restart or just view their stats.

# Beta 1.7 - The nature update
- added grass, which shakes when you stomp/slide in it.
- added clouds, which slowly move to the right
- added thorn_heads enemies, which you must smash from the side at a high speed, not on top
- added a speed bar for the gui in the bottom left corner
- changed the enemy spawning mechanics again
- added game over sound effects, visual effects and a shaky text function - currently only being used by the gameover text. Therefore, the death sequence is fully (it can always improve though) complete
- added boom boxes, which explode the enemies around it
# Beta 1.7.1 - need for speed
- changed how the speed bar works - now relies on animation as opposed to width. This also allows better colour changing
# Beta 1.7.2 - a thorn in my side
- fixed game over text not appearing sometimes upon death
- added forgotten code to make thornheads be able to die from explosions
- lowered the thornheads spawning rate, and reduced the speed necessary to destroy them.
- this is the third tested version

# Beta 1.8 - The power update
- added evil eye enemies, which shoot fireballs and float around (1 per level)
- added power boxes, giving you a random power of 5 powers
- added 5 power (their functionalities): triple jump, thorn armour, giga cube, super kinetic, quake stun
- added gui power indicators
- added new player skins for each power
- added music in game (not final draft of the song though), curtesy of BC mix music (producer) and Me, finesden (melodizer)
- improved walljump physics
- fixed some bugs
- this is the fourth tested version
# Beta 1.8.1 - less treasures and more treasures
- fixed the landing on 3rd box and falling through bug
- changed that now enemies can't ever spawn close to you
- removed gaining score from basic actions like jumping and pounding
- added digging animation for bad cubes which come out of the left wall
- added a super sparse spicy secret...
- fixed some other bugs
# Beta 1.8.2 - the grand finale
- updated the music to the final version!
- changed how boxes generate in later stages
- changed that evil eye's aim is not perfect
- added that bad cubes in air will hover but more subtle than the evil eye does
- removed damage from boom boxes
- this is the fifth tested version
# Beta 1.8.3 - healthier but harder
- changed that you get minimum 2 hearts at the start of each stage
- changed that you always only get a half heart for the start of each stage, if you have 2 or more hearts
- changed that evil eye height spawns relative to tallest stack per stage
- changed spawning mechanics for thorn- heads and bad cubes
- fixed the glitch through the side of box bug
- fixed walljump velocity bugs
- fixed camera not going to correct location when skipping a stage by going far to the right
- fixed triple jump power not keeping it's air jump counts when walljumping
- fixed gui number text not following camera properly (still a bit buggy)
- fixed some other bugs

# Beta 1.9 - The menu update
- added the bloquake title logo
- added starting page
- added main menu selection page with these options: Play, Tutorial(not usable yet), Vault(not usable yet), Stats (not usable yet), Credits, Settings. 
- added transition from menu to game, and game to menu.
- added transition splash text
- added a 4th option in pause menu to quit (go back to menu)
- added controls page to inform player on controls
- added settings page to change various settings, including toggling black and white (vintage) mode
- added credits page to view all the ones who helped make the game
- added various setting variables (none of which will affect actual gameplay) which can be turned on or off in settings page]
- added mute music and mute sound buttons, m to mute music, n to mute sound, and it causes the gui symbols to appear when muted
- added menu music ("menu music" by Ethan S. Fine (finesden) - it's actually just a simplified altered version of nature cube)
- added all 42 player icons, but these are only in the game files - they have yet to be properly implemented. (you can cycle through the different icons in game using the keys i and u)
- removed the ability to press b + w while loading the game to activate vintage mode
- added a temporary feature: press d to toggle the frame rate gui
- changed that super kinetic power also makes you fall faster in squished form
- added that restarting plays a sound effect
- fixed some bugs
- this is the sixth tested version
# Beta 1.9.1 - loading for no reason
- changed the clicking effect for clicking a selection in the main menu (there is now a falling apart animation instead of the width decreasing)
- added an initial loading screen with a square which forms as you wait - this loading screen s only when you load/reload the game (it's to combat the unfortunate menu music offset)
- reduced average max frame to 40 (this is the intended frame rate, and setting it higher creates weird speediness when it randomly spikes)
- added the vault page (no achievements yet though, so all you can do is view the different icons and scroll around the grid system)
# Beta 1.9.2 - Choose it and keep it
- changed the dot's sprite to have lighter colours
- added a pop animation for when you collect the dot
- increase player acceleration by 25%
- changed the credits to include more
- changed some texts (e.g. the menu options) to be in bold
- added some dev functions
- fixed so that when you turn costumes off, it immediately changes the animation
- added functionality to the vault menu - you can now press shift to select which costume you want, and a marking will indicate which one is selected
- added that the selector in main menu now changes to the selected skin
- fixed a bug that in vintage mode the evil eye doesn't get stunned during a stun quake
- removed the ability to cycle through the costumes using the keys  "i" and "u"
- this is the seventh tested version

# Beta 1.10 - The achievements update
- added achievements
- added that costume icons in vault will be darker and unselectable until unlocked
- added text wich appears in vault page to tell you what to do to complete that achievement
- added a phrase which goes with each achievement
- added the gui pop up to notify you when you get an achievement
- added all time stats page, which can be accessed via the main menu
- added all time stats, which record the in game stats upon a restart or quit
- added a highscore page, which can be accessed via the all time stats page
- added a new feature to thorn heads: they now go in an out of the ground, and can only be killed when they're fully out
- added that the hitbox takes the shape of the player, as opposed to always being a square
- changed the sprite image for the default player costume to be less shiny
- changed the colour of the gigacube costume to yellowish biege to match its power gui emblem
- changed some of the splash text phrases
- fixed a bunch of bugs of which I can not recall at the moment I wrote this in the dev log
# Beta 1.10.1 - smooth moving on a clean slate
- changed gravity and jump power so that they are increased, but you still can only jump about 4.5 blocks high, but now faster and more realistically
- changed acceleration (by increasing it about 10%) and icreased max speed (by 25%) of player
- added smooth camera following
- added variable jumping heights: hold down up during a jump for a max height of 4.5, otherwise, the longer you hold, the higher you'll go
- fixed the bug where the stun would happen on a non stunquake power quake due to activating the power during the quake
- fixed the gui text so it is now 100% fixed in place relative to the camera
- fixed the bug in which the camera would go too high relative to the player due to quaking the ground a lot without going back above x=110 in order to get back in camera view, so basically, now the camera will never stretch too far away from player vertically
- fixed a bug where thornheads would go too far underground when moving to the right when a box appears on them
- added some lag optimization

# Beta 1.11 - The tutorial update
- added the tutorial. It's a massive new addition. It must be played and completed before choosing the play option in the menu as the play option is locked until you complete the tutorial. The tutorial has over 20 lessons (custom stages) teaching all the game machanics in an interactive way.
- added a text dialogue system. This code was used to incorporate the helpful guide text for the tutorial. It tells you about each game mechanic, and what you have to do to complete the lesson
- added a whole new texture: Night. This is a new theme in addition to Colour (now called normal) and Vintage.
- changed the option in settings "vintage mode - true/false" to be "theme - normal/night/vintage" so now it cycles through 3 theme choices to include the new 3rd one
- added another easter egg... but this one can only ever be done once?
- improved box smashing by adding a new hitbox follower. This makes high speed smashing miss a lot less boxes, which was an issue with superkinetic
- changed that going too far to the right only teleports you next to the other wall of the room without taking you super high in the air.
- fixed many text mistakes in menus
- changed some of the loading screen splash text
- changed some of the achievement requirements
- fixed the bug where sometimes menu music fails to play until the game starts, in which it overlaps with the main ingame music. (the fix was to prevent an overlap, not the absence of it in the first place)
- fixed some asthetic bugs having to do with the menu, achievement bar, and transition
- changed that achievements involving total stats (e.g. total boxes broke) will check for during a game and not just after, which would cause you to get the achievement upon starting the next game
- fixed a lot of bugs (I guess?)
# Beta 1.11.1 - better tutorial
- fixed bug with how the white outline on tutorial text appears
- removed the box in lesson- stage stranded boxes that was at the far right of the arena
- removed the requirement to complete the lesson with full health for any lesson previously requiring such
- changed the tutorial text
- changed that you are no longer required to complete the tutorial to play the main- playing- mode
- removed that easter egg added in 1.11 which can only be done once, because it is now no longer rellavent due to thise update's removals
- added another secret which involves clicking...
# Beta 1.11.2 - HTML adjustments
- changed that the HTML now centres the canvas. Now you can play without having to tilt your head to the left!
- changed that the canvas flexes to fit the screen. Now you don't have to zoom in.
- changed several of the unlockable player costume sprites
- changed several of the achievement requirements to make them more reasonable
# Beta 1.11.3 - Splash Text
- added unique splash text for entering the Tutorial, and another set of splash texts for leaving the Tutorial
- changed the name of one of the sound effects
# Beta 1.11.4 - Text fix
-  changed some more text
- added a styleSheet to replace the style tag contents in the HTML

# Beta 1.12 - Save and load update
- added a the save and load functions
- changed that the splash screen says "Saving..." instead of of "Loading..."
- added the ability to save and load information using localStorage (this happens automatically)
# Beta 1.12.1 - Some final touches
- changed some sprites to look nicer
- fixed bugs regarding achievements
# Beta 1.12.2 - the jumping box
- changed some splash text and achievement text
- added a box jumping gif to the html page to replace the loding text
- fixed some bugs
- changed D dev key to V
- changed that special boxes are not as common in later levels as they were before
- changed that boxes shouldn't spawn so close to the wall (so no more ultra wall jumps? aw.)
- added a notification for when you reach stage 100 (apparently there are people who can do it) But it doesn't have an achievement skin
- cleaned up some code
# Beta 1.12.3 - lag buster
- added saving boxes out of view, then deleting them and only saving position and type. This essentially means they can't be interacted with by anything outside of player's view
- added that same concept for bad cubes and thorn heads.
- added that thorn heads now always appear in the ground when they first come into view
- reduced max number of fireballs per reddening to 5
- fixed the special box chances
- fixed some bugs, I think.
- cleaned up some code
# Beta 1.12.4 - Vintage Music
- added game music "Nature Cube Vintage" by Finesden. It plays instead of the main song when you play the game in vintage theme
- fixed bug where boxes are missed when smashing stacks with superKinetic (this was a tough one that has been around for a while)
- fixed bug where player goes through a stack when it is close enough to the wall, after doing a walljump (this was also a tough one)
- fixed bugs having to do with bad cubes
# Beta 1.12.5 - Some more final touches
- added an acceleration boost for when you first start moving
- added that bad cubes now are automatically destroyed if they get to high
- fixed bug where camera doesn't follow player the whole way to the left wall
- fixed some bugs relating to the tutorial
# Beta 1.12.6 - Bad Cubes are annoying
- fixed bad cubes, but they'll always be weird. That's just how they are. Don't make fun of them. They're amazing in their own special way
- fixed bug that caused animation glitches for the destruction animations (e.g. box destroy or bad cube destroy animation)
- fixed some bugs relating to stunning the enemies
# Beta 1.12.7 - text revamped
- cleaned up all code relating to text
- changed positioning and font size and opacity of various text
- added new font (Squarewave.ttf by jeti - a pixel font that is downloadable online, and is free for commercial use)
- note that the new text is only being used in its bold version, so any text that was normal or italic before is now bold, but the code would still support otherwise
# Beta 1.12.8 - Some more adjustements
- fixed blurriness due to html canvas rescaled
- changed all the tutorial text to make it shorter and more engaging and clear to the point
- changed some things about tutorial lesson requirements and setup
- fixed a bug related to quake stun
- added "finesden studios." to the box- jump loading gif
- added gradient backgrounds to the html body and viewports
- added a "click anywhere to start" screen to ensure the canvas is focused before the game is meant to start 'listening' and playing music
- removed the loading square screen that said "loading"
- fixed some other bugs
# Beta 1.12.9 - Mini arrow directors
- added mini arrow directors, and the option to turn them on/off in settings
- added that the mini arrow directors also show you where to go in the tutorial, in addition to just pointing to boxes and the dot
- added that thorn- heads now shake before going in and out - as a warning system
- fixed some depth issues
- added that having thornArmour powerup won't let you die.
- changed the stage initiation's health game system
- fixed a couple of bugs, because why not?

# ***Release (May 2020)***

# 1.0 - "Oh boy..."
- well, I released it - it's on kongregate. That's pretty cool, right?

# 1.1 - "A quick fix"
- changed the movement speeds
- added a lessons selection in tutorial to select a lesson to jump to
- removed tutorial restart
- added help text for players that started the game without the tutorial
- added help text in tutorial that says press space to read on
- fixed mysterious compound lag issue, but there's still enough lag left for all the 3 star ratings... :(
- added WASD keys for movement and click to pause

# 1.2 - "Winter isn't here"
- added Winter theme
- changed Player acceleration (increased)
- changed enemy spawn rates (decreased)

# 1.3 - "Lullaby"
- added special Night theme Music for when you play in Night theme.
- fixed some sound issues

# 1.4 - "Speed Mode" (Release date: November 2023)
- added speedmode game Mode
- added speedmode music (it's just the original theme x1.36 speed)
- removed speedBar (it now functions as the combo bar during speed mode)
- added speedmode stats (e.g. best combo and top speed mode stage)
- added gamemode option in settings
- added 21 new achievements and costumes
- changed some old achievement requirements
- added special speedmode relevant greeting/farewell texts
- added special tutorial guide text for playing tutorial in speed mode
- added Expert Mode (unlocked with the expert achievement (reach stage 60))





