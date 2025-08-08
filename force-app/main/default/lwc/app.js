import {LightningElement} from "lwc";

export default class App extends LightningElements{
    name = "Electra X4";
    description = "A sweet bike built for comfort.";
    category = "Mountain";
    material = "steel";
    price = "$2,700";
    pictureUrl = 'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax4.jpg';
    bike = {
        name: 'Electra X4',
        picture: 'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax4.jpg'
    }
}
