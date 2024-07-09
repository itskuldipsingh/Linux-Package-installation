# Linux packages/apps installation 
## Open a Terminal and activate super user using <b>sudo bash</b> command and entering <b>password</b>
```
sudo bash
```
## First update and upgrade Linux system mpackages
```bash
apt -y update    #update Linux system's package
apt -y upgrade    #upgrade Linux system's package
```
## Now run commands for which app you want to install from below.
- Vim: Vi IMproved, a programmer's text editor
```
apt -y install vim    
```
- VSCode: lightweight powerful source code editor
```
snap install code --classic
```
- GNU project C and C++ compiler
```
apt -y install gcc
apt -y install make
```
- Open ssh server
```
apt -y install openssh-server
```
- Filesystem client based on SSH
```
apt -y install sshfs    
```
- Interactive process viewer
```
apt -y install htop     
```
- python3 and a tool for installing and managing python packages
```
apt -y install python3
apt -y install python3-pip      
```
- Arduino IDE: Integrated development environment for Arduino boards and NodeMcu
```
apt -y install arduino      
```
- Firefox browser
```
apt -y install firefox      
```
- Thunderbird: email client 
```
apt -y install thunderbird      
```
- high-level interface to the package manager
```
apt -y install aptitude     
```
- kdeconnect: file sharing tool within local network
```
apt -y install kdeconnect       
```
- Libreoffice: Open source office suit
```
apt -y install libreoffice      
```
- Telegram messaging app
```
snap install telegram-desktop       
```
- Chrome browser by downloading .deb file
```
apt-get install libxss1 libappindicator1 libindicator7
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt -y install ./google-chrome*.deb
```
## After installing all packages update and upgrade Linux package
```
apt -y update    #update Linux system's package
apt -y upgrade    #upgrade Linux system's package
```
