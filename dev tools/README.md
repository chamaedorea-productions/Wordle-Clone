# compile tailwind

 ```sh
 tailwindcss -i ./static/src/main.css -o ./static/dist/main.css --minify
 ```

# compile typescript

 ```sh
 tsc -p "./tsconfig.json"
 ```
 
# TODO

 - [ ] Create a better svg for the delete key
 - [ ] Create a better svg for the enter key
 - [x] Make the device keyboard usable for desktop
 - [ ] Create a button to show and hide the built in keyboard for desktop
 - [x] Make flashed messages removable
 - [x] Add css for flashed messages
 - [x] Combine "settings/game.py" and "settings.words.py"
 - [x] Add more words
 - [x] Add functionality to show the highscores from finished games (when the user some how managed to evade them)
 - [ ] Add css for the highscores from finished games
 - [x] Add css to the active games page
 - [ ] Add minimal requirements for special characters etc. for the password
 - [ ] Add a bar to show the password security
 - [x] Remove the base 64 encoding when submiting username and passowrd
 - [ ] Show valid characters for username and password
 - [x] Save users highscores
 - [x] Make the word length and the available languages more dependent on the loaded words
 - [x] Remove hard coded minimum and maximum word lengths.
 - [ ] Improve the word comparison in the python file.
