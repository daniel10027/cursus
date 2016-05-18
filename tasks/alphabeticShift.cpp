std::string alphabeticShift(std::string inputString) {
        for(int i = 0; i < inputString.size(); i++) {
                inputString[i] = ((inputString[i] - 'a') + 1) % 26 + 'a';
        }
        return inputString;
}
