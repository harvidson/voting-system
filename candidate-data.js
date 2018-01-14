const candidateData = [
  {
    "id": 1,
    "first_name": "Jan",
    "last_name": "Werthers",
    "party": "Right is Right",
    "electoral_district": "Downtown",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet blandit felis. In euismod varius libero, vel dignissim dolor iaculis non. Sed lacinia tempor nunc scelerisque pharetra. Sed aliquam lobortis sem, nec scelerisque nibh ultrices eget. Sed bibendum nisi ut porta pretium. Quisque ullamcorper nisl fringilla, sodales arcu quis, pellentesque massa. Cras pharetra libero vitae cursus consequat. Etiam ullamcorper tortor at libero ultricies, in molestie mi posuere.",
    "image": "werthers.jpg"
  },
  {
    "id": 2,
    "first_name": "Alphonse",
    "last_name": "D\xE2\u20AC\u2122Costa",
    "party": "Green Green Green",
    "electoral_district": "Uptown",
    "bio": "Ut ac enim vulputate, feugiat dolor non, hendrerit massa. Phasellus odio nunc, lobortis quis ante vitae, ornare dapibus enim. Pellentesque velit est, molestie eu congue et, consectetur eget sapien. Curabitur pulvinar consequat ex ac consequat. Cras sem tellus, semper quis justo imperdiet, gravida lacinia justo. Donec turpis metus, ornare in auctor at, imperdiet sodales risus. Fusce quis volutpat velit. Nam id urna porttitor, cursus quam eget, finibus lectus. Etiam pellentesque quam varius felis venenatis, nec pellentesque ipsum rhoncus. Nulla ornare non tortor vitae lobortis. Aliquam non scelerisque orci, vel cursus augue. Vestibulum quis bibendum est, in elementum massa. Sed fermentum mauris id ligula semper gravida. Duis egestas auctor mi, pretium ultricies risus.",
    "image": "daetmcosta.jpg"
  },
  {
    "id": 3,
    "first_name": "Gita",
    "last_name": "Sing",
    "party": "Middle Folk",
    "electoral_district": "Suburbia",
    "bio": "Praesent pellentesque justo lectus, faucibus eleifend libero bibendum ac. Curabitur at tellus dolor. Duis ultricies mi eget suscipit euismod. Fusce elementum pulvinar fringilla. Suspendisse et est dictum, vulputate ex at, pharetra odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut convallis, augue tempus tempus dictum, urna mauris gravida purus, sed mattis ex nulla vel ante. Aliquam erat volutpat. Aliquam erat volutpat.",
    "image": "sing.jpg"
  },
  {
    "id": 4,
    "first_name": "Earl",
    "last_name": "Bendy",
    "party": "Red Red Red",
    "electoral_district": "Inner City",
    "bio": "Ut tempor, tellus in imperdiet finibus, lectus turpis facilisis erat, non faucibus nisl mauris non augue. Aliquam ultrices velit tortor, vel laoreet tellus varius tincidunt. Suspendisse rhoncus eros ac enim aliquet, ut consequat justo maximus. Nullam condimentum aliquam metus nec scelerisque. Sed risus felis, interdum a eros et, egestas sagittis eros. Cras vel nisl quis dui ultrices malesuada sit amet a dolor. Nunc ut justo dignissim, euismod odio vitae, commodo erat. Donec posuere, tellus sit amet commodo efficitur, metus ante ultricies sem, a mollis odio odio nec velit.",
    "image": "bendy.jpg"
  },
  {
    "id": 5,
    "first_name": "Betty",
    "last_name": "Bodner",
    "party": "Lefties",
    "electoral_district": "Uptown",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet blandit felis. In euismod varius libero, vel dignissim dolor iaculis non. Sed lacinia tempor nunc scelerisque pharetra. Sed aliquam lobortis sem, nec scelerisque nibh ultrices eget. Sed bibendum nisi ut porta pretium. Quisque ullamcorper nisl fringilla, sodales arcu quis, pellentesque massa. Cras pharetra libero vitae cursus consequat. Etiam ullamcorper tortor at libero ultricies, in molestie mi posuere. Ut ac enim vulputate, feugiat dolor non, hendrerit massa. Phasellus odio nunc, lobortis quis ante vitae, ornare dapibus enim. Pellentesque velit est, molestie eu congue et, consectetur eget sapien. Curabitur pulvinar consequat ex ac consequat. Cras sem tellus, semper quis justo imperdiet, gravida lacinia justo. Donec turpis metus, ornare in auctor at, imperdiet sodales risus. Fusce quis volutpat velit. Nam id urna porttitor, cursus quam eget, finibus lectus. Etiam pellentesque quam varius felis venenatis, nec pellentesque ipsum rhoncus. Nulla ornare non tortor vitae lobortis. Aliquam non scelerisque orci, vel cursus augue. Vestibulum quis bibendum est, in elementum massa. Sed fermentum mauris id ligula semper gravida. Duis egestas auctor mi, pretium ultricies risus. Praesent pellentesque justo lectus, faucibus eleifend libero bibendum ac. Curabitur at tellus dolor. Duis ultricies mi eget suscipit euismod. Fusce elementum pulvinar fringilla. Suspendisse et est dictum, vulputate ex at, pharetra odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut convallis, augue tempus tempus dictum, urna mauris gravida purus, sed mattis ex nulla vel ante. Aliquam erat volutpat. Aliquam erat volutpat.  Ut tempor, tellus in imperdiet finibus, lectus turpis facilisis erat, non faucibus nisl mauris non augue. Aliquam ultrices velit tortor, vel laoreet tellus varius tincidunt. Suspendisse rhoncus eros ac enim aliquet, ut consequat justo maximus. Nullam condimentum aliquam metus nec scelerisque. Sed risus felis, interdum a eros et, egestas sagittis eros. Cras vel nisl quis dui ultrices malesuada sit amet a dolor. Nunc ut justo dignissim, euismod odio vitae, commodo erat. Donec posuere, tellus sit amet commodo efficitur, metus ante ultricies sem, a mollis odio odio nec velit.  Sed diam lacus, dignissim non lorem eget, tempus sollicitudin erat. In ut tincidunt nisi, eget tincidunt quam. Integer tempor pretium cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor ac mauris viverra maximus semper ac erat. Maecenas gravida ligula nibh, et luctus mi elementum ac. Sed dignissim libero arcu, non ultricies tellus gravida in. Aenean placerat fringilla ligula, nec pellentesque erat consectetur at. Fusce vel neque blandit, commodo est eget, pharetra arcu. Nam iaculis ligula nec sodales vulputate. Donec vehicula elit quis lorem bibendum tempus. Vivamus vitae mauris non orci egestas porta id id orci. Nulla rutrum nisi a tincidunt tempor. Nunc dictum arcu in vestibulum semper. Etiam tincidunt ante sed sagittis sodales.",
    "image": "bodner.jpg"
  }
]
