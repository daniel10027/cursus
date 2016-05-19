bool charactersRearrangement(std::string s1, std::string s2)
{
  sort(s1.begin(),s1.end());
  sort(s2.begin(),s2.end());
  return s1==s2;
}
