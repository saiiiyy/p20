import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redButton.addComponentOrReplace(transform3)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 2, 10),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883497714996338, 4.795694828033447, 1.000585675239563)
})
nftPictureFrame2.addComponentOrReplace(transform4)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8.5, 13, 15.5),
  rotation: new Quaternion(3.0981581063376906e-15, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(9.94230842590332, 10.597467422485352, 1.1141860485076904)
})
plainText.addComponentOrReplace(transform5)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.5, 13, 14),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(2.773983955383301, 2.84765625, 1.0005985498428345)
})
nftPictureFrame4.addComponentOrReplace(transform6)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.5, 12.5, 2),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(2.08210825920105, 2.1784567832946777, 1.0005968809127808)
})
nftPictureFrame6.addComponentOrReplace(transform7)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.5, 15.5, 2.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(3.6957991123199463, 8.54296875, 1.0005940198898315)
})
nftPictureFrame7.addComponentOrReplace(transform8)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.5, 16, 13),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(5.541504859924316, 5.6953125, 1.0011823177337646)
})
nftPictureFrame8.addComponentOrReplace(transform9)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.49999988079071045, 2, 6.089275360107422),
  rotation: new Quaternion(4.3234668622315784e-16, 0.7102450132369995, -8.466782475125001e-8, 0.7039545774459839),
  scale: new Vector3(4.923890590667725, 5.6953125, 1.0005934238433838)
})
nftPictureFrame.addComponentOrReplace(transform10)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.49999988079071045, 2, 2.089275360107422),
  rotation: new Quaternion(4.3234668622315784e-16, 0.7102450132369995, -8.466782475125001e-8, 0.7039545774459839),
  scale: new Vector3(4.923890590667725, 5.6953125, 1.0005937814712524)
})
nftPictureFrame3.addComponentOrReplace(transform11)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.49999988079071045, 2, 10.089275360107422),
  rotation: new Quaternion(4.3234668622315784e-16, 0.7102450132369995, -8.466782475125001e-8, 0.7039545774459839),
  scale: new Vector3(4.923891067504883, 5.6953125, 1.0005931854248047)
})
nftPictureFrame5.addComponentOrReplace(transform12)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(12.105133056640625, 2, 0.5000001192092896),
  rotation: new Quaternion(1.8144596000929485e-14, 0.015476368367671967, -1.8449344274529267e-9, 0.999880313873291),
  scale: new Vector3(4.923881530761719, 5.6953125, 1.0005946159362793)
})
nftPictureFrame11.addComponentOrReplace(transform13)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(7.605133056640625, 2, 0.5000006556510925),
  rotation: new Quaternion(1.8144596000929485e-14, 0.015476368367671967, -1.8449344274529267e-9, 0.999880313873291),
  scale: new Vector3(4.923881530761719, 5.6953125, 1.0005946159362793)
})
nftPictureFrame12.addComponentOrReplace(transform14)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(3.105133056640625, 2, 0.5000009536743164),
  rotation: new Quaternion(1.8144596000929485e-14, 0.015476368367671967, -1.8449344274529267e-9, 0.999880313873291),
  scale: new Vector3(4.923881530761719, 5.6953125, 1.0005946159362793)
})
nftPictureFrame13.addComponentOrReplace(transform15)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(15.5, 2, 3),
  rotation: new Quaternion(8.356869938653882e-16, 0.70710688829422, -8.429370268459024e-8, -0.7071067690849304),
  scale: new Vector3(1.7685214281082153, 1.867843508720398, 0.009999890811741352)
})
imageFromURL.addComponentOrReplace(transform16)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(15, 2, 6),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.8835039138793945, 4.795694828033447, 1.0005861520767212)
})
nftPictureFrame9.addComponentOrReplace(transform17)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(redButton, {}, createChannel(channelId, redButton, channelBus))
script2.spawn(nftPictureFrame2, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script3.spawn(plainText, {"text":"PARDEY","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText, channelBus))
script2.spawn(nftPictureFrame4, {"id":"19707794715962039650013670819326392846345927146224565303908839291834142294116","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script2.spawn(nftPictureFrame6, {"id":"19707794715962039650013670819326392846345927146224565303908839296232188805220","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script2.spawn(nftPictureFrame7, {"id":"19707794715962039650013670819326392846345927146224565303908839328118026010724","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"19707794715962039650013670819326392846345927146224565303908839311625351594084","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame3, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame5, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script2.spawn(nftPictureFrame11, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script2.spawn(nftPictureFrame12, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script2.spawn(nftPictureFrame13, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script4.spawn(imageFromURL, {"image":"https://pardey-base.s3.ap-northeast-1.amazonaws.com/radio.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(nftPictureFrame9, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))