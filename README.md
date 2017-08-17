## How To Use

 1. Install this plugin with `npm install -g whotspot`.
 2. Run `hotspot setup` to create a hotspot.
 3. Run `hotspot on` to turn hotspot on.
 4. Run `hotspot off` to turn hotspot off.
 5. Run `hotspot status` to check hotspot status.

## Note -
 1. The plugin currently works in Windows 7 only.
 2. It uses elevate.exe to run program as Administrator.
 3. `hotspot setup` needs to be run only first time. However you can also use this command to change hotspot name and password.
 4. If the tool doesn't work do this -
        * In cmd type `ncpa.cpl`. This will open Control Panel.
        * In the network connections window, right-click on your wireless network adapter and select Properties.
        * In the Sharing tab of the pop-up window, enable the “Allow other network users to connect through this computer’s Internet connection” box.
        * In the dropdown present below, select the first option
        * If error persists try running cmd as Administrator.
