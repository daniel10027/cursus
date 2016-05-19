std::vector<int> textOverlayOnHeroImage(std::vector<std::vector<int> > image, int height, int width) {
  int sum;
  int maxx=0;
  std::vector<int> r(2,0);
  for(int i=0; i+height<=image.size(); i++) {
    for(int j=0; j+width<=image[0].size(); j++) {
      sum=0;
      for(int k=0; k<height; k++) {
        for(int m=0; m<width; m++) {
          sum+=image[i+k][j+m];
        }
      }
      if(sum>maxx) {
        r[0]=i;
        r[1]=j;
        maxx=sum;
      }
    }
  }
  return r;
}
