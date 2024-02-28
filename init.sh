echo "Install Xcode via App Store first, then press any key to continue..."
read -s -n 1 -p "Press any key to continue..."
echo ""s

# Check the exit status of the xcodebuild command
XCODE_VERSION=`xcodebuild -version | grep '^Xcode\s' | sed -E 's/^Xcode[[:space:]]+([0-9\.]+)/\1/'`
ACCEPTED_LICENSE_VERSION=`defaults read /Library/Preferences/com.apple.dt.Xcode 2> /dev/null | grep IDEXcodeVersionForAgreedToGMLicense | cut -d '"' -f 2`

if [ "$XCODE_VERSION" = "$ACCEPTED_LICENSE_VERSION" ]
then 
    echo "Xcode license has been accepted."
else
    echo "Xcode license has not been accepted. Please run 'sudo xcodebuild -license accept' to accept the Xcode license."
    exit 1
fi

# Update your xcode dev tools and wait for installation
xcode-select --install

# Install Homebrew if not already installed
if ! command -v brew &> /dev/null
then
    echo "Homebrew not found. Installing Homebrew..."
    /bin/zsh -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Install nvm (Node Version Manager)
echo "Installing nvm..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh

# Initialize nvm (assumes .zshrc is the config file for zsh)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install Node.js and npm using nvm
echo "Installing Node.js..."
nvm install node # Installs the latest version of Node.js
nvm use node

# Install Node.js and Watchman
echo "Installing Node.js and Watchman..."
brew install node
brew install watchman

# Install CocoaPods
echo "Installing CocoaPods..."
brew install cocoapods

# Install React Native CLI
echo "Installing React Native CLI..."
npm install -g react-native-cli
npm install -g react-native