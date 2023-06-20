var p5Inst = new p5(null, 'sketch');
var myFontNormal, myFontBold, fontReady = false;
function fontRead(){
    fontReady = true;
}
  
window.preload = function () {
  myFontNormal = loadFont("Squarewave-Bold.ttf", fontRead);
  initMobileControls(p5Inst);
  {
  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["16fd3d99-bfd7-4918-a17c-1659ecc54cda","3a5b7312-e93c-4a50-9c0a-6f2dd6815774","67ff9485-6e0a-4b3f-9323-a8e78cfa6069","6afd8f9e-15e2-460b-a8a8-eb33c21991df","404e7eb2-4ccc-4961-8b29-a1169001ebb9","a3c5b89c-19f8-493a-b22b-5e4e6e6bcf90","9c134100-f629-4650-ac10-5730166d886a","849efaa4-b04b-4e61-b1b8-d844ae9796d0","74be1726-2b7f-4052-9fcc-510f3737eaeb","e0a7077c-a298-42a5-9e37-af9abefef359","637b5014-9d57-463b-b5da-4822f805b41f","85ca725b-e6b4-4521-8508-89d26d5dcdee","19086017-bd92-4a98-b900-e846d33d7765","21113182-37c1-4f47-b9eb-b10daa506d69","88f57660-91e2-409e-a23d-79f1616666b0","cb8547ab-6b70-4db4-88a5-745bc9f342a3","d48255f7-5606-4cad-859c-b8a6525a2e1a","13d9a735-6153-4b11-9632-cb8b410fab05","a6c03620-d716-48b9-9efe-0f6d2d758ca6","30c7e3b0-82b6-4015-b736-faf6f0173050","c3ae7200-8d04-4615-b045-ad2510a44440","edac8d50-7de5-43a3-bad1-77b0e9c12aed","9ce9e638-0333-4c32-a577-6f36b4b3289d","d7ab7b11-d02f-4019-957e-4e76fa71f1d0","a1fb0276-4700-4dba-aeb1-46d14cf4c079","51d6bcc8-804e-4a10-bdd3-c8ba294e41c8","5ca0d866-9b21-41c0-94a8-0ded66534b58","721c8a66-1334-4baa-8e87-d1efc6f1719e","e0e6050b-0bef-4341-8afd-723746d64ee5","72405e98-ac54-4bdc-9015-d053e358efff","066aa682-aaf5-463c-861a-f640ad4bca8c","1a05540e-011d-4c7f-b619-c30e869055dd","78b084fb-ca54-4b48-91dc-a92eb934c482","cddda41a-8697-4079-acb9-fefed5c1d5d5","3c8dcd5d-3f66-42ee-95c1-93242e29d4c0","561f3ae8-9b29-4e24-9d8a-431285a61846","2e5e5f76-26a1-4b20-a137-59419e49e057","c327c5cd-ecde-4539-8bcb-21eb49e3b9eb","a3f51879-0bbe-4fa1-95af-c3b230720f4f","26fc7d7d-49d9-48fa-8d8b-d61bf1c5789e","03cedfda-17f8-4524-9373-f9c3c42c8a04","7acd999d-3f68-4677-8a4b-1bbd8312d84e","0af79e72-cd9d-4938-804a-23c538c5a4a6","d645999d-2742-4695-9ad1-36cb6dcd2b5e","4a573c38-8104-49a7-8ae6-67858022c7dd","fdc9303e-707b-4041-a7a1-4fbd6120b4b0","5783799c-9bd9-470e-8333-c4236c69a947","a3b94706-f565-4662-9c63-99102e11caca","3ad87c13-a5cf-45c6-967e-9aeb8d1dcf4b","399f3fc0-823c-424c-b18e-e21cecb4217a","7f95bb26-662c-43e0-bb36-73a66fc7bf7c","4975b80a-8007-4120-8a2c-cfed32eae2a1","b165f6ee-f304-4919-bb88-ec3e6712987f","67bd2d9c-673f-4387-a830-5b9014f00435","6f9ba01b-f23b-480a-94e7-fe83aaf32b50","9d453875-5881-4d4d-9b6e-3359c045fdfc","dad296b8-12ef-4fa2-86aa-cdd529996119","2f194910-f40f-4e63-821a-a7d42ba02007","843c5837-7d05-4cb4-9d2b-4db1dbf8793f","6371aa9a-4ffe-4749-b43e-45047a8326fb","e811a30a-77e0-4ba7-9d9b-fad8a5e9f3be","7ab28034-2f1b-45c8-8b49-4981b5f7d9df","3afc931b-9aaa-46c1-ac96-6b79f227d0e2","a0c448a3-402b-4319-82bd-d645b7a049ac","18abb396-4ea7-45c5-95bb-6a7b4e2095ba","bf12b630-274b-4a98-8e38-5da9283f1f1c","4bd74e5f-04c3-45e4-a420-6a9c73bfb851","e115cbd6-35ac-40c5-b881-e19fe64c4ff8","b19b794b-0afa-4bd6-b9f8-78a2caf7cf76","18fd8e84-a7d7-4d8e-a3fa-394ca29b44c9","fc8adb2c-e7e0-4f5f-a521-9bed5cd50832","d96e8c3c-3215-4dec-9fdb-40a6e832b181","50fb4f3a-d968-40a1-b09e-d97f239fae75","2e54d4fb-1212-4f3f-86ba-a077c26cdb6d","0111a252-8c75-43cf-b86d-244da81d960c","54e0e0b0-90ab-4f8a-9d85-c08a6bafd913","5bfb846b-0cf6-45fc-b243-bc30cd7b1b3d","94a5e95c-37c3-4fbf-9ae4-71b222caba0f","ce72c906-0753-43fd-801d-1b5ce54added","1e541047-08e1-488b-b46e-debf41a6a0bc","d9b3df0e-cd4d-4da1-9d7c-72dc6893d37d","e78718c0-e533-4e38-b791-943fea7e2cd0","0eeb47df-04de-4d4f-9c63-6f86a6798a88","0acdac5c-b4be-4e70-b9a3-5c216a81548e","94def775-4b8e-4bb4-99ba-dc2468564c8f","dc9567d7-ed7f-49f6-8e95-6cc2b9e9be4d","c89532cb-1f6d-4e0d-a24b-981539935ec2","bf853804-679b-465c-9551-78623be0273b","d4ea82d7-87fc-436f-905a-d81572978b66","1c5b22f8-43ce-4878-9636-132f02e8a4c8","b88c3e65-d671-4921-b54a-9e4b2a1b45ae","f4371998-3517-4718-9033-664ed87d96c8","26b19b82-1dc2-4d54-aa3d-5a3880ab2d5b","92eb06e5-ec9f-48d0-bf31-67a28dbe28f6","87814014-43cd-46d6-89a9-d15bef32c1c5","ca39eafc-2504-43d7-8bf4-6dbf70fc502c","354732bf-6de2-40b0-9808-c170610699ec","048214ed-2ce0-46eb-afe9-5a357f0487ec","cdd3add8-c82f-46ee-a71f-b66ec5ebd23a","cab165c2-cb7c-4010-a82e-aa239c68b291","f3038751-809b-4583-9661-f0f8f06c6398","f4e009e9-e078-43cf-91a6-c7f85b659cb9","4fba785a-5bb7-4d1e-ab48-58433b18d935","94eac152-739e-4c1b-83bb-b2ac420d5533","e3319cab-87df-4181-89a0-280932ae4283","bb327756-ea6a-4426-9680-839962eb3d5d","6be512f3-3b4a-4931-8fd6-d539661df545","69e18f55-e8a8-4165-bd4d-d53bdac1f79e","f6648074-9840-4279-b44a-3ce151919872","63cbf24e-7a23-47a4-abeb-6c93badb4d30","4c6a1334-b3db-40c1-8b05-718641f70c54","2f9c63f5-8230-424b-ab02-18ce49ce3f57","f2eba8dc-9807-4c51-8901-a5854e9ead9c","33b40b46-8e25-4c89-b8c7-31f905f7ba84","98ebba4e-9f34-4fe8-9d53-325371c1c72b","0cc72f77-1356-4d6e-99e5-b9af52cd21dd","ed68999b-a56d-4b5b-8e50-ff5198bccf1d","0db4726a-d181-4ca7-8bef-a34bcd8ff920","862edc44-b63a-4b7d-be7c-f78f5b0d94b8","6ed42459-4831-491b-9efc-16897288f075","8bac9172-6326-4f7c-94bf-143e7a9aa8e8","ab89b54f-4b80-4437-ab08-99bc7a9f941d","b06258b3-8922-48cd-9247-e579e3ca8b74","cae4ae47-ac6a-42b1-95aa-9da07036d9b8","9fe048dd-2061-4a7d-b6cb-31037974bb45","1d7668c8-ea4c-4c2f-a3a3-8db76bc9fe5d","345a62eb-b02b-4b81-90d3-f682aaba1bb0","09851713-8e54-465e-94d4-e73c65e8fae4","3c7a1242-ba06-415f-862b-261c2f391991","81be3504-9cce-484e-b9c8-f465e885a680","74cb0903-32b6-4d8c-ac86-7e393aeee589","a1af6b37-cd07-4651-b1ec-e43661c3d320","fb891a9e-38a8-42b2-b6e0-109a2bfdaa0d","89c226db-ea0e-4ccc-84cc-e10ae27e97fb","09a61f97-421b-48d3-bb55-86ebe5d4a664","57803e0c-3faf-42fc-877e-6538bb74d376","b3fb263d-bc34-493d-b551-d98544f91109","48f5d215-0040-427a-bf56-dcf2c5d1db74","63eca405-d1b7-4d7f-a12a-4abbbce213b2","42cb1cdd-fe9d-4ffd-a6bf-2f5f6e0272b2","53107c46-01e0-489a-aefb-e52d849fa25c","1b0bce59-3e00-4534-952d-ec3216d38089","6e4d2d44-d701-4ccf-84de-16b3509b0f5f","b9b94f6f-d50d-4081-a08f-c34014a6de75","926f1b42-5b87-4a7b-801a-9e46558111b2","656f2432-9b7d-40b3-875a-b1f6497ed7d0","282be78e-e446-49bc-b514-a1bcf4ba7125","87075927-0b8c-4d23-b643-d4e0fb5c9015","c145117d-1d4e-4b71-9bfa-794633773aac","6ca36461-2aad-40a6-863c-29660ce819ff","594176c1-25f5-46c7-857c-f84ad62e7640","9efa3d0f-abb1-49d1-ae1a-3127193a2b74","28b2065f-1b96-4e22-8781-9d0fb37dd791","247e7652-6e68-43b5-be89-74e7700b50fd","3f2e949e-db80-4026-95ca-d4953280c35c","5b452ab8-9f69-4870-8671-e3d9aa05061c","d9260a28-32b3-4752-bd90-b598856b2039","5d29ec8d-58c5-4ba7-b94c-4e54506d80c1","9dbf2c78-ff27-490a-8b08-437d31e9db71","bd983982-e227-41a2-9368-b344e1152adf","24be5a4e-28d3-4b1d-a36f-cbf58b314014","db9b6547-8581-4a51-97ca-5dabab1d0210","7e5a4b29-f9c3-419b-bd73-8309045d0b32","6369ee94-e640-4b46-a9c3-a39501d7ab38","88bc3e07-3e34-49cf-aa33-e78f1a3c0a21","8622636a-62c4-4166-8676-16997e4a2449","0fcac30f-5453-4985-9e19-cb0eccc439c6","dbfbf6f0-25fd-439a-b035-95e424ae23fe","5b891c3b-48af-471e-9107-c6b549e1505a","17a3d4cc-e58a-46d3-b7ed-4958aa43f1f9","2229f983-6f43-48f8-b4f7-e10fec183049","239d784a-9d89-4781-a548-655744939701","f6ba5693-4ec1-456b-8114-9d12b97bb6b0","6c0e6cbb-c925-4fd6-a6cf-288272ee9cfb","f67f9bb5-72be-416e-9825-5febc3b83a75","e461ba37-114d-4b50-a7fa-c438499a352b","6648df2f-0e87-4e91-8add-6ed210eb0ada","6bc1a5f2-16b5-468f-87a9-06d8cf59c7a1","aca04930-3f3d-404f-9901-98b1e993a602","6e69592b-7f93-429d-beaa-0e1527555e90","b07ed96f-3616-4990-8e95-0cd5a69ffdcc","3c6961e4-4287-4b01-add8-a7081017e604","eaf095c7-8f07-496a-ad7f-e9c997297f1e","a4491827-f3d6-42bf-83c8-1dd09e61ecf1","59950b95-7dd0-4572-a9ec-52c738dd60fa","da5eaed8-4493-4898-bc0f-b976576ace26","7e66a345-0806-4e8d-a9e8-2456a9004d77","9420c561-b370-4a55-93e0-ecdf26b33308","8103c9f1-eb46-4db4-8e95-a1b357a28ec2","a0801334-fdb2-45e9-bc1b-95d264ff6e7c","ff1f1460-38cb-4a05-9629-831d3cdce9ca","ea26e9f0-9be1-4384-bfd4-bc45814c4eb1","ea32a407-bab8-4098-8000-51c11c74aa95","edbbad0c-773e-45cd-b074-0b38286d3ec5","4c40a5e7-197f-4f46-b09e-4ed0fc386bb9","4cd1ab82-b421-4e8d-bee5-c14cb384112e","58a977de-679f-4ebf-bbef-17ec67f72d11","602247ba-1ef7-479a-909d-9bf7ad059cb9","cfdbfb2a-6be4-428a-b3cc-87d01ad15355","a05b7638-22a3-4800-a8f4-795a30312312","1e3b205c-a09c-4d6a-9cc9-9c345f989f78","bfa422ca-49e6-4d59-960c-191854fb4352","49004989-870a-42d4-86e5-948ade62fcf4","021c0a46-745e-4832-9d1d-b5e7fa6e3c89","838f1e9e-3707-4ad0-9cd1-e8bdc0272e19","5b176464-9e8e-4ed1-b158-5f2636d15e9f","c30ddec4-8ea4-4fa4-a9b9-dd90a29b8946","57315c19-1608-4fcb-819c-191f60caeb4e","2fb05c54-2224-4790-8dc5-95e0af91026e","f6215032-071b-4f9a-9d81-a9b51c17db96","bc7e33ac-7c03-4906-9cc8-154eec5ee080","2b537681-abd1-40c7-9aaa-cd0ea2170ba5","d9ea3eab-b686-451b-8d26-2b31f2317cd3","e2df3b97-e398-4ac9-b697-6af7c0633309","ddce3903-7565-403e-a1b6-9ae28da097da","e09f79de-e021-40f5-9410-6131acf3effc","0ae953cc-f2df-4142-859e-0f8265921696","dad32831-404a-4ac1-bd68-e679ffc59270","92c607d0-137d-4b22-ad0f-c8ff022f7197","91bb7e3e-b0c3-458e-9085-fe30b6319cf5","d0fd3f10-df76-464f-873e-b9d3260876b4","111cd793-1ce1-4454-b973-0f59b4c1c249","53a7ef38-b1d2-4d60-8c55-71bbd3f61ee1","b5561574-b837-4b56-804a-001c31e28588","d7b6210b-e49c-4365-bdea-0947929c005a","fe95673f-d3cb-40a9-8131-9cc1829ee706","28ed849b-2484-4767-ae27-599478d42ca9","db562e47-9754-4e39-befd-6b28c1f0786d","a24ba779-faf6-4c87-9031-4248be92fd93","74b24791-120b-46b7-b7e5-272ac366e2dc","c038f0b9-bf9c-4331-98e5-c051903502bf","47a5d8e7-44eb-498d-9660-3c812fbcc249","5c4c262f-2743-4e04-8f6d-4b38e6a63b52","f6b0bb02-7a96-4190-afdc-f4c83dea4191","317489b1-d08d-4dae-8a7f-bda294007f55","c8fc4af4-5cc4-41cf-90c3-b9a1e69853b1","c0668b67-481c-486d-a051-169c7c044c58","6df5886c-7209-4387-aae9-663c7e1f52de","b3fd0076-39ee-4383-b60a-4bde798c0239","b781c3f8-f983-4b46-9d82-defdb278f597","455dd81f-4565-46fd-acf7-74ad40257375","2bf740ba-c62a-4860-9fc7-21cc7ca62798","91a8c01d-53d1-41aa-8c2a-2fcbe6baf02a","0d6e4bc3-7cac-43a2-8375-e3102309ea11","a8f6c7dd-53b1-467a-a293-12e4d9b140b3","82da2144-5da6-438e-9397-fa3d9ab0f89c","82dd9025-d732-47c2-a0e8-08af24c6a572","963de960-14f4-48f5-a13b-843c235c67ea","a117376d-da33-4fcb-aae6-fef593173139","8cd6647c-836a-49f0-a427-e89a00ce619e","7c680685-20ce-4c96-934b-cd6b8858ad24","1482ab4f-4a99-4627-89f7-40de01b80698","68d7e96a-31d8-4692-8d59-cbb6ce5a34ba","eabbdc07-4980-4cd5-94cb-5afbe0591793","249a990d-e42f-457d-93d6-50b3e5172849","31a48312-0daa-479d-ab75-6c51f283caa4","55f0dca3-6acc-49b2-b855-31b1a6f9b263","31dadbe8-e78a-48ae-90dc-e5e44219c99b","116ef312-1671-49ef-a55e-f70a2651a725","be4d9c17-7dd8-450b-8c5c-4b215241975e","06ca2590-603e-48d0-a070-1bc5a967e0c5","f69856f6-e38d-427f-b57e-f243feb55b0d","05bb9244-cdcf-4e47-8c0b-ae043066030f","f03e7135-0e68-40fa-9a24-8c5067972bed","a17a9c49-8590-4d49-9d65-1d51d3da43b3","5a895b05-f593-47e3-8297-b98a320fc928","56bee997-b105-4af6-ab39-c333a9bfe525","72f294ea-4ee6-4cc7-812a-c8a5908e2a24","7b28d818-16ff-4e64-b6d0-328e4ef1d8a3","3b22beb5-75e5-4e16-b458-a135ca1906d7","0dfe6748-6f0a-4f3b-bb32-509d9839b6ff","11f8102d-792d-4c5b-b31b-5e64362767c4","c6c423e1-4d24-432c-9475-9aba476ed0c0","11142c3b-0ded-4287-bd56-5d12646ae01c","0c169168-aa80-4e6f-b99b-3b7e344248d3","16914a3d-7144-4465-babb-b6c78a8730c1","dafea2b3-4ae8-4f75-8085-db7eb4902c3d","2f545273-92e2-4ea7-875e-7b21aecfd3e1","e26dc931-550a-4974-8604-c6d7349864fc","80765c01-5e13-4c55-b9f5-2d63ea948295","033da317-eca6-4690-b7c8-74793e9a4908","68b69b26-1d66-4bfd-8fea-56eb3e966d62","3fd822a2-cf69-4194-92a4-84e16d53aa94","3c35f0a1-e554-49a0-bd74-a4209acb73f4","a87523aa-9b54-4c39-aa47-1451f446f272","c1da653c-cc31-41ad-9138-ff1e1d12c5e3","53579577-9385-4abe-ab95-3c3bd9acacbc","0681e2b4-0ef7-4330-bd6d-18a44fc5a240","fdf73570-454a-4c54-af6e-21ab4de6877b","efe766fd-aec1-48f4-ba15-173248c63aa3","c65661fc-1376-428c-832b-b3d832a0802f","9a7c328c-026c-4d65-9cc5-12452ab3ba63"],"propsByKey":{"16fd3d99-bfd7-4918-a17c-1659ecc54cda":{"name":"cube","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"hLSBWs0H8VEBIWpowVbiXD87TXI2YnJp","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/16fd3d99-bfd7-4918-a17c-1659ecc54cda.png"},"3a5b7312-e93c-4a50-9c0a-6f2dd6815774":{"name":"c_cube","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"jE4RwF7SWEcpHpvJc1fEAxfWZLYb0wWj","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/3a5b7312-e93c-4a50-9c0a-6f2dd6815774.png"},"67ff9485-6e0a-4b3f-9323-a8e78cfa6069":{"name":"cube_big","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"C_sxj_Sj4EXphEmhOCpXmP0R57HRfuEq","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":192},"rootRelativePath":"assets/67ff9485-6e0a-4b3f-9323-a8e78cfa6069.png"},"6afd8f9e-15e2-460b-a8a8-eb33c21991df":{"name":"c_cube_big","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"UBc3RJxKRjdJpmbimgjFj6Qr_p6.lz8c","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":192},"rootRelativePath":"assets/6afd8f9e-15e2-460b-a8a8-eb33c21991df.png"},"404e7eb2-4ccc-4961-8b29-a1169001ebb9":{"name":"c_cube_bigNoFace","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"AdEvJZ84G3QoQ8eLjvW5ppoSJcWPqqui","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":192},"rootRelativePath":"assets/404e7eb2-4ccc-4961-8b29-a1169001ebb9.png"},"a3c5b89c-19f8-493a-b22b-5e4e6e6bcf90":{"name":"cube_squish_big","sourceUrl":null,"frameSize":{"x":120,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"MVnR9mZ6M28tcPMk6PHAc3W5vSLvPl49","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":192},"rootRelativePath":"assets/a3c5b89c-19f8-493a-b22b-5e4e6e6bcf90.png"},"9c134100-f629-4650-ac10-5730166d886a":{"name":"c_cube_squish_big","sourceUrl":null,"frameSize":{"x":120,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"rZcwfYX8yuODvnwKzcjUppBJKkOwtQbE","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":192},"rootRelativePath":"assets/9c134100-f629-4650-ac10-5730166d886a.png"},"849efaa4-b04b-4e61-b1b8-d844ae9796d0":{"name":"c_cube_squish_bigNoFace","sourceUrl":null,"frameSize":{"x":120,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"dOGgZCZIOXlS5scdM6tt9lUMmnrmqSRj","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":192},"rootRelativePath":"assets/849efaa4-b04b-4e61-b1b8-d844ae9796d0.png"},"74be1726-2b7f-4052-9fcc-510f3737eaeb":{"name":"c_cube_stun","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"WGCvYDDLSdXeJW9MoKoDCQoVukKEhqyZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/74be1726-2b7f-4052-9fcc-510f3737eaeb.png"},"e0a7077c-a298-42a5-9e37-af9abefef359":{"name":"c_cube_squish_stunned","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"NuRqpySDsnW6lq7r3PEfcodg7vIfpndJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/e0a7077c-a298-42a5-9e37-af9abefef359.png"},"637b5014-9d57-463b-b5da-4822f805b41f":{"name":"c_cube_squish_stun","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"syWwpSZ.x8VmMS_bHzP9txqEhlQ7xY7z","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/637b5014-9d57-463b-b5da-4822f805b41f.png"},"85ca725b-e6b4-4521-8508-89d26d5dcdee":{"name":"c_cube_jumpy","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"b0SYebvnSLQLx0xEzBIh8sLLE_QkqE3h","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/85ca725b-e6b4-4521-8508-89d26d5dcdee.png"},"19086017-bd92-4a98-b900-e846d33d7765":{"name":"c_cube_squish_jumpy","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"cyxoIsUfxQN7LYoBG.uk.acbIhMX19NL","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/19086017-bd92-4a98-b900-e846d33d7765.png"},"21113182-37c1-4f47-b9eb-b10daa506d69":{"name":"c_cube_kinetic","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"CHaIFEo54w1y3bziBgcQCcT7QJa3Y5fl","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/21113182-37c1-4f47-b9eb-b10daa506d69.png"},"88f57660-91e2-409e-a23d-79f1616666b0":{"name":"c_cube_squish_kinetic","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"XkTIdzM560SiaSN65CZbFOFswU0XWNOJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/88f57660-91e2-409e-a23d-79f1616666b0.png"},"cb8547ab-6b70-4db4-88a5-745bc9f342a3":{"name":"c_cube_armor","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"6anF0VB_VR.f8e.t7Xo.KK87G3If87c4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/cb8547ab-6b70-4db4-88a5-745bc9f342a3.png"},"d48255f7-5606-4cad-859c-b8a6525a2e1a":{"name":"c_cube_squish_armor","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"bXqvK3m_7KGc2Zycz.nlr06mk5uNK86S","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/d48255f7-5606-4cad-859c-b8a6525a2e1a.png"},"13d9a735-6153-4b11-9632-cb8b410fab05":{"name":"cube_squish","sourceUrl":null,"frameSize":{"x":60,"y":51},"frameCount":2,"looping":true,"frameDelay":12,"version":"v39SZLOjQ7KA1dd0mowOgA9kDCMxKs0L","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":102},"rootRelativePath":"assets/13d9a735-6153-4b11-9632-cb8b410fab05.png"},"a6c03620-d716-48b9-9efe-0f6d2d758ca6":{"name":"c_cube_squish","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"D7QHGMtAuFpY9n5nqIHt8TnttW_AwX43","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/a6c03620-d716-48b9-9efe-0f6d2d758ca6.png"},"30c7e3b0-82b6-4015-b736-faf6f0173050":{"name":"floor_piece","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"6YPsz2.zOalVgDtfdmqHdrsXJc0tidre","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/30c7e3b0-82b6-4015-b736-faf6f0173050.png"},"c3ae7200-8d04-4615-b045-ad2510a44440":{"name":"c_floor_piece","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"HpCCmh73JmysA83QxIRRUvN4SLZB8w_V","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/c3ae7200-8d04-4615-b045-ad2510a44440.png"},"edac8d50-7de5-43a3-bad1-77b0e9c12aed":{"name":"c_floor_piece_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"nYc2pTss3zZzn.WZmkX.svJhJY7IbP_V","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/edac8d50-7de5-43a3-bad1-77b0e9c12aed.png"},"9ce9e638-0333-4c32-a577-6f36b4b3289d":{"name":"c_floor_piece_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"nM4IFff4yvojJNWZJKRcB6sMeNF0bPjX","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/9ce9e638-0333-4c32-a577-6f36b4b3289d.png"},"d7ab7b11-d02f-4019-957e-4e76fa71f1d0":{"name":"behind_wall","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"5dFIPKrpgjU7UB3GgsQ9GwURI6kdoTl4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/d7ab7b11-d02f-4019-957e-4e76fa71f1d0.png"},"a1fb0276-4700-4dba-aeb1-46d14cf4c079":{"name":"under_floor","sourceUrl":null,"frameSize":{"x":48,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"bz1UHMRo2.eqVz9F9HIZG6livQSLsYNZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a1fb0276-4700-4dba-aeb1-46d14cf4c079.png"},"51d6bcc8-804e-4a10-bdd3-c8ba294e41c8":{"name":"c_behind_wall","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"S25Eiqd6xPHC44OYDTAEQrMW612x_u0p","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/51d6bcc8-804e-4a10-bdd3-c8ba294e41c8.png"},"5ca0d866-9b21-41c0-94a8-0ded66534b58":{"name":"c_behind_wall_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"R8GnBZamdB.3vjMOaUnwBhtrqifnF0sA","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/5ca0d866-9b21-41c0-94a8-0ded66534b58.png"},"721c8a66-1334-4baa-8e87-d1efc6f1719e":{"name":"c_behind_wall_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"cAeZG4Qo0Lcj8CCYe9.nebZlmxyE3FZS","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/721c8a66-1334-4baa-8e87-d1efc6f1719e.png"},"e0e6050b-0bef-4341-8afd-723746d64ee5":{"name":"c_under_floor","sourceUrl":null,"frameSize":{"x":48,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"jweG5P_k_yyWLX36PiXFAZ0e7PHdjLUb","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/e0e6050b-0bef-4341-8afd-723746d64ee5.png"},"72405e98-ac54-4bdc-9015-d053e358efff":{"name":"c_under_floor_snow","sourceUrl":null,"frameSize":{"x":48,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"BXBPw1CfW6XvKs8cwVTDUH2CLlfP8voV","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/72405e98-ac54-4bdc-9015-d053e358efff.png"},"066aa682-aaf5-463c-861a-f640ad4bca8c":{"name":"c_under_floor_night","sourceUrl":null,"frameSize":{"x":48,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":".cPD1ASpUeABgsbEppWMUpTJvO6IAfMq","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/066aa682-aaf5-463c-861a-f640ad4bca8c.png"},"1a05540e-011d-4c7f-b619-c30e869055dd":{"name":"wall_paper_dirt","sourceUrl":null,"frameSize":{"x":720,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ez4CTVeu1hHCw7qxtGFxcf1_oIPZDmhd","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":720},"rootRelativePath":"assets/1a05540e-011d-4c7f-b619-c30e869055dd.png"},"78b084fb-ca54-4b48-91dc-a92eb934c482":{"name":"corner_piece_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"AHV2kmGLF.77_6Y56HJmLh0XlkVBr2g3","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/78b084fb-ca54-4b48-91dc-a92eb934c482.png"},"cddda41a-8697-4079-acb9-fefed5c1d5d5":{"name":"c_corner_piece_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"9_i_tlsifIoyVigUBILhGDEJ0ac5LrHs","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/cddda41a-8697-4079-acb9-fefed5c1d5d5.png"},"3c8dcd5d-3f66-42ee-95c1-93242e29d4c0":{"name":"c_corner_piece_left_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":".60gaL3TvYleGl.lqMiKetLV5Qh5llHo","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/3c8dcd5d-3f66-42ee-95c1-93242e29d4c0.png"},"561f3ae8-9b29-4e24-9d8a-431285a61846":{"name":"c_corner_piece_left_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uawkr5XP3QDIsrPqwiKfhA7FfcnjbPib","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/561f3ae8-9b29-4e24-9d8a-431285a61846.png"},"2e5e5f76-26a1-4b20-a137-59419e49e057":{"name":"wall_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"G7azAFizjXZaY5hAj5l66aFYWHdA.k9_","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/2e5e5f76-26a1-4b20-a137-59419e49e057.png"},"c327c5cd-ecde-4539-8bcb-21eb49e3b9eb":{"name":"c_wall_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"0sBESkMkV1vsGtFRFyQLwfuw7cn4hXFE","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/c327c5cd-ecde-4539-8bcb-21eb49e3b9eb.png"},"a3f51879-0bbe-4fa1-95af-c3b230720f4f":{"name":"c_wall_left_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"EQAYjgGTyKejUHIGZ7RTz5Wk2BJwQPDo","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/a3f51879-0bbe-4fa1-95af-c3b230720f4f.png"},"26fc7d7d-49d9-48fa-8d8b-d61bf1c5789e":{"name":"c_wall_left_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"iiJS1vIJjk9tmUhJK5LQtUbpW_G8a8gc","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/26fc7d7d-49d9-48fa-8d8b-d61bf1c5789e.png"},"03cedfda-17f8-4524-9373-f9c3c42c8a04":{"name":"dot","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":15,"version":"SxlpXpXQCZ4x3LdobgFzVBCRG4qqCmi4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/03cedfda-17f8-4524-9373-f9c3c42c8a04.png"},"7acd999d-3f68-4677-8a4b-1bbd8312d84e":{"name":"c_dot","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":15,"version":"0laUS0euL2tlyvAsMYDTwvpn_O0UIK02","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/7acd999d-3f68-4677-8a4b-1bbd8312d84e.png"},"0af79e72-cd9d-4938-804a-23c538c5a4a6":{"name":"c_dot_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"QSApzxm4kfuI3Ijoh69dnfrMgCTdfrsn","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/0af79e72-cd9d-4938-804a-23c538c5a4a6.png"},"d645999d-2742-4695-9ad1-36cb6dcd2b5e":{"name":"c_dot_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"rFiwLIA48xu1oi7okTqLeEFB.1APWfV1","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/d645999d-2742-4695-9ad1-36cb6dcd2b5e.png"},"4a573c38-8104-49a7-8ae6-67858022c7dd":{"name":"floor_topping","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"nKFN5pR2xessiPtTTtzcbm0dibUKknRD","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/4a573c38-8104-49a7-8ae6-67858022c7dd.png"},"fdc9303e-707b-4041-a7a1-4fbd6120b4b0":{"name":"c_floor_topping","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"6Vu1baDToQCMhtDH8TESrq57AmaNRREN","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/fdc9303e-707b-4041-a7a1-4fbd6120b4b0.png"},"5783799c-9bd9-470e-8333-c4236c69a947":{"name":"c_floor_topping_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"YxS5_LfwcJlPCSlG6P7A3FH8PVcaUv1I","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/5783799c-9bd9-470e-8333-c4236c69a947.png"},"a3b94706-f565-4662-9c63-99102e11caca":{"name":"c_floor_topping_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"sxek6QeatmlSniBOD6vPK_CJtjK6Cfe8","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/a3b94706-f565-4662-9c63-99102e11caca.png"},"3ad87c13-a5cf-45c6-967e-9aeb8d1dcf4b":{"name":"box","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":6,"looping":true,"frameDelay":1,"version":"P9AxLWd49mfSZuggKLoCB9WxeVTsQGhx","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/3ad87c13-a5cf-45c6-967e-9aeb8d1dcf4b.png"},"399f3fc0-823c-424c-b18e-e21cecb4217a":{"name":"box_gui","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":3,"version":"QAW.pzuwZije5RR1E3YwujZSePfKmR_U","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/399f3fc0-823c-424c-b18e-e21cecb4217a.png"},"7f95bb26-662c-43e0-bb36-73a66fc7bf7c":{"name":"c_box","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"UuuvyI0HtDxhavrIavJtHLKmJxbHOaU9","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/7f95bb26-662c-43e0-bb36-73a66fc7bf7c.png"},"4975b80a-8007-4120-8a2c-cfed32eae2a1":{"name":"c_box_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"SvQr9JZStBLwOv5sBHvogTCaZp8dyxdH","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/4975b80a-8007-4120-8a2c-cfed32eae2a1.png"},"b165f6ee-f304-4919-bb88-ec3e6712987f":{"name":"c_box_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"CDv8ptm7imUbJ1Yfy0qFEsqII72KNC1U","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/b165f6ee-f304-4919-bb88-ec3e6712987f.png"},"67bd2d9c-673f-4387-a830-5b9014f00435":{"name":"c_box_gui_night","sourceUrl":null,"frameSize":{"x":52,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"tbNcbJcO62wcvQ3jv7aEBTUfwWiXVWnS","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":52},"rootRelativePath":"assets/67bd2d9c-673f-4387-a830-5b9014f00435.png"},"6f9ba01b-f23b-480a-94e7-fe83aaf32b50":{"name":"c_box_gui_snow","sourceUrl":null,"frameSize":{"x":52,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"vMBTujrvJ85wAzDmqun_LCkyzg0vH8Ck","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":52},"rootRelativePath":"assets/6f9ba01b-f23b-480a-94e7-fe83aaf32b50.png"},"9d453875-5881-4d4d-9b6e-3359c045fdfc":{"name":"c_box_gui","sourceUrl":null,"frameSize":{"x":52,"y":52},"frameCount":1,"looping":true,"frameDelay":2,"version":"IjApNqtdnd0uSEL5uWOZfj3w0w_nrpPw","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":52},"rootRelativePath":"assets/9d453875-5881-4d4d-9b6e-3359c045fdfc.png"},"dad296b8-12ef-4fa2-86aa-cdd529996119":{"name":"c_box_mystery","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"AzYPR0qWQX9yfJVNqx.fMPA.wLWhdnvs","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/dad296b8-12ef-4fa2-86aa-cdd529996119.png"},"2f194910-f40f-4e63-821a-a7d42ba02007":{"name":"c_box_mystery_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"PS4QcioGz0hd5xuaY5aucaFAbmvZWCf5","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/2f194910-f40f-4e63-821a-a7d42ba02007.png"},"843c5837-7d05-4cb4-9d2b-4db1dbf8793f":{"name":"c_box_buff_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"yN4fmqAMDyq5l_p0iySteHm9dMLHEHyx","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/843c5837-7d05-4cb4-9d2b-4db1dbf8793f.png"},"6371aa9a-4ffe-4749-b43e-45047a8326fb":{"name":"c_box_boom_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"b9fiOim20mhFKqzi34cCDSnGlIs6swyj","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/6371aa9a-4ffe-4749-b43e-45047a8326fb.png"},"e811a30a-77e0-4ba7-9d9b-fad8a5e9f3be":{"name":"c_box_mystery_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"yL7PXyOjD__2Xl.KuA0EKVG0L1KP0vsl","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/e811a30a-77e0-4ba7-9d9b-fad8a5e9f3be.png"},"7ab28034-2f1b-45c8-8b49-4981b5f7d9df":{"name":"c_box_buff","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"uS1OhBeefhkyEQFndHkaea_7JUtylSg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/7ab28034-2f1b-45c8-8b49-4981b5f7d9df.png"},"3afc931b-9aaa-46c1-ac96-6b79f227d0e2":{"name":"c_box_buff_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"D5pyNdflDFe_mTnfo31am_pzneuKNK5m","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/3afc931b-9aaa-46c1-ac96-6b79f227d0e2.png"},"a0c448a3-402b-4319-82bd-d645b7a049ac":{"name":"c_box_boom","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"_wr43hWAgiSxLh82vccLOEZalU0xWc39","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/a0c448a3-402b-4319-82bd-d645b7a049ac.png"},"18abb396-4ea7-45c5-95bb-6a7b4e2095ba":{"name":"c_box_boom_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"g1U9zkl1iTNlaOodqTne6Qz3.4gwYtlH","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/18abb396-4ea7-45c5-95bb-6a7b4e2095ba.png"},"bf12b630-274b-4a98-8e38-5da9283f1f1c":{"name":"box_mystery","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"fjt5mRuG9YAHIHUTwqN1ObiV5TySZU08","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/bf12b630-274b-4a98-8e38-5da9283f1f1c.png"},"4bd74e5f-04c3-45e4-a420-6a9c73bfb851":{"name":"box_buff","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"bW5G.2td0Fpce0_UCyPHWcqIB02TGAUP","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/4bd74e5f-04c3-45e4-a420-6a9c73bfb851.png"},"e115cbd6-35ac-40c5-b881-e19fe64c4ff8":{"name":"box_boom","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"MqGyullplWqZAttQ0PDXqrK8FAEMKz4Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/e115cbd6-35ac-40c5-b881-e19fe64c4ff8.png"},"b19b794b-0afa-4bd6-b9f8-78a2caf7cf76":{"name":"hitbox","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"YWFH.WVA38CHrFmQ9zCI95I7TCMyOCz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/b19b794b-0afa-4bd6-b9f8-78a2caf7cf76.png"},"18fd8e84-a7d7-4d8e-a3fa-394ca29b44c9":{"name":"tallbox","sourceUrl":null,"frameSize":{"x":48,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"a8V1GTlpeM24iH0XNRQF7ed.u.sj8Rs4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":72},"rootRelativePath":"assets/18fd8e84-a7d7-4d8e-a3fa-394ca29b44c9.png"},"fc8adb2c-e7e0-4f5f-a521-9bed5cd50832":{"name":"particle","sourceUrl":null,"frameSize":{"x":48,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"oKUF60nR92tIzAJ.gBVwMVIAaFcu64eR","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":30},"rootRelativePath":"assets/fc8adb2c-e7e0-4f5f-a521-9bed5cd50832.png"},"d96e8c3c-3215-4dec-9fdb-40a6e832b181":{"name":"c_particle","sourceUrl":null,"frameSize":{"x":48,"y":30},"frameCount":1,"looping":true,"frameDelay":10,"version":"dG3MDIGQHryGFsTnghGLgYMJ1EdFCUxT","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":30},"rootRelativePath":"assets/d96e8c3c-3215-4dec-9fdb-40a6e832b181.png"},"50fb4f3a-d968-40a1-b09e-d97f239fae75":{"name":"c_particle_night","sourceUrl":null,"frameSize":{"x":48,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"qk8W4k05XQf4_twYjb4vRbT4HFO3IN70","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":30},"rootRelativePath":"assets/50fb4f3a-d968-40a1-b09e-d97f239fae75.png"},"2e54d4fb-1212-4f3f-86ba-a077c26cdb6d":{"name":"c_particle_snow","sourceUrl":null,"frameSize":{"x":48,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"1AZnOb6P5YlrZl1ckHO3LTwXl_pE36hj","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":30},"rootRelativePath":"assets/2e54d4fb-1212-4f3f-86ba-a077c26cdb6d.png"},"0111a252-8c75-43cf-b86d-244da81d960c":{"name":"c_pop","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"CfKqu5g4.eMySF_UzLvGQEe.eQ0cMzan","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/0111a252-8c75-43cf-b86d-244da81d960c.png"},"54e0e0b0-90ab-4f8a-9d85-c08a6bafd913":{"name":"c_pop_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"iPNJeNHgrXAnMrsan4XXm6VHEFmevsMM","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/54e0e0b0-90ab-4f8a-9d85-c08a6bafd913.png"},"5bfb846b-0cf6-45fc-b243-bc30cd7b1b3d":{"name":"c_pop_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"Li8J0jwKpMj3lHDfYcjRL89HnrYRi2al","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/5bfb846b-0cf6-45fc-b243-bc30cd7b1b3d.png"},"94a5e95c-37c3-4fbf-9ae4-71b222caba0f":{"name":"c_dot_pop","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"LEw3OECXHUDR4J48ndwKc1znep4qRhAc","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/94a5e95c-37c3-4fbf-9ae4-71b222caba0f.png"},"ce72c906-0753-43fd-801d-1b5ce54added":{"name":"c_dot_pop_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"18JrnwotgefliIefjFK4odxJQsi2u3KS","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/ce72c906-0753-43fd-801d-1b5ce54added.png"},"1e541047-08e1-488b-b46e-debf41a6a0bc":{"name":"c_dot_pop_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"6eNqKB50L3YWvJ3GEYmEDI_YSjsvd4l7","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/1e541047-08e1-488b-b46e-debf41a6a0bc.png"},"d9b3df0e-cd4d-4da1-9d7c-72dc6893d37d":{"name":"pop","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":7,"looping":true,"frameDelay":1,"version":"QoMVZsCgtncxZNU2eK6KeA5wpB5ma5YX","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/d9b3df0e-cd4d-4da1-9d7c-72dc6893d37d.png"},"e78718c0-e533-4e38-b791-943fea7e2cd0":{"name":"secret","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"eyvLLcmfNJY_vtwPVustv81jK9BzU6o5","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/e78718c0-e533-4e38-b791-943fea7e2cd0.png"},"0eeb47df-04de-4d4f-9c63-6f86a6798a88":{"name":"c_secret","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"sNWej6roJ7wSgCW.jRlebqCjDaXobpg9","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/0eeb47df-04de-4d4f-9c63-6f86a6798a88.png"},"0acdac5c-b4be-4e70-b9a3-5c216a81548e":{"name":"bad_cube","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"amcAOemOmSQg5bqLGad64CQ.il4TWtdx","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/0acdac5c-b4be-4e70-b9a3-5c216a81548e.png"},"94def775-4b8e-4bb4-99ba-dc2468564c8f":{"name":"c_bad_cube","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":10,"version":"fTTV2X6FwdTREvdfA2eoz54yjkV3esI8","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/94def775-4b8e-4bb4-99ba-dc2468564c8f.png"},"dc9567d7-ed7f-49f6-8e95-6cc2b9e9be4d":{"name":"c_bad_cube_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"4_eYlnfNQPc5Mnn9vNC4FNTZZY2NldH1","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/dc9567d7-ed7f-49f6-8e95-6cc2b9e9be4d.png"},"c89532cb-1f6d-4e0d-a24b-981539935ec2":{"name":"c_bad_cube_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"eJcCQCuHaXdeWZEYNfsAEgEk1LwIkPxA","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/c89532cb-1f6d-4e0d-a24b-981539935ec2.png"},"bf853804-679b-465c-9551-78623be0273b":{"name":"bad_cube_dead","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"p.b7bYTdcsgNyugooO2o9N5OoQmrjka2","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/bf853804-679b-465c-9551-78623be0273b.png"},"d4ea82d7-87fc-436f-905a-d81572978b66":{"name":"c_bad_cube_dead","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"6kdL0wRVG3wOvEgy0cLVVOdmIG9miNqp","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/d4ea82d7-87fc-436f-905a-d81572978b66.png"},"1c5b22f8-43ce-4878-9636-132f02e8a4c8":{"name":"c_bad_cube_dead_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"BvmmRXBtFBmU0me3fjSJfmpz2NyyKlYH","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/1c5b22f8-43ce-4878-9636-132f02e8a4c8.png"},"b88c3e65-d671-4921-b54a-9e4b2a1b45ae":{"name":"c_bad_cube_dead_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"GAZxmR9FfPNDYhUcIG7msIJOdSeoPtgf","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/b88c3e65-d671-4921-b54a-9e4b2a1b45ae.png"},"f4371998-3517-4718-9033-664ed87d96c8":{"name":"c_tri","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":2,"looping":true,"frameDelay":12,"version":"RFuhfG1Vv5s5SE9dYgBqcgiPT2YyhrPq","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":104},"rootRelativePath":"assets/f4371998-3517-4718-9033-664ed87d96c8.png"},"26b19b82-1dc2-4d54-aa3d-5a3880ab2d5b":{"name":"c_tri_night","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":2,"looping":true,"frameDelay":12,"version":"mhqyT.pgGOoTDzuwSEOF7rvTjacrNPp3","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":104},"rootRelativePath":"assets/26b19b82-1dc2-4d54-aa3d-5a3880ab2d5b.png"},"92eb06e5-ec9f-48d0-bf31-67a28dbe28f6":{"name":"c_tri_snow","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":2,"looping":true,"frameDelay":12,"version":"T6HMod4Flh5QgN4zPtJbNd58CqRPWvSt","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":104},"rootRelativePath":"assets/92eb06e5-ec9f-48d0-bf31-67a28dbe28f6.png"},"87814014-43cd-46d6-89a9-d15bef32c1c5":{"name":"c_tri_dead","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":5,"looping":true,"frameDelay":1,"version":".wqWuxUsHWr9ozBB9mJQop84jCUak2U1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":156},"rootRelativePath":"assets/87814014-43cd-46d6-89a9-d15bef32c1c5.png"},"ca39eafc-2504-43d7-8bf4-6dbf70fc502c":{"name":"c_tri_dead_snow","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":5,"looping":true,"frameDelay":1,"version":"0PJFs.B8_f0O4QaRwEVsajNoWThzvlA7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":156},"rootRelativePath":"assets/ca39eafc-2504-43d7-8bf4-6dbf70fc502c.png"},"354732bf-6de2-40b0-9808-c170610699ec":{"name":"c_tri_dead_night","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":5,"looping":true,"frameDelay":1,"version":"meQP_AW7YfM9j3tfajSbqv6CpLuLI874","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":156},"rootRelativePath":"assets/354732bf-6de2-40b0-9808-c170610699ec.png"},"048214ed-2ce0-46eb-afe9-5a357f0487ec":{"name":"tri","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":2,"looping":true,"frameDelay":12,"version":"6lqEqoeqR7uTRlERQWQgkiJ2x_YfTWBH","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":104},"rootRelativePath":"assets/048214ed-2ce0-46eb-afe9-5a357f0487ec.png"},"cdd3add8-c82f-46ee-a71f-b66ec5ebd23a":{"name":"tri_dead","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":5,"looping":true,"frameDelay":1,"version":"6Hsz06kJp3BgUl68XiXLS99_6ZqZ8V0p","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":156},"rootRelativePath":"assets/cdd3add8-c82f-46ee-a71f-b66ec5ebd23a.png"},"cab165c2-cb7c-4010-a82e-aa239c68b291":{"name":"eye","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":10,"looping":true,"frameDelay":1,"version":"WrMvqa0HhowNFwTTfwd9VUxJyOULUSVK","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/cab165c2-cb7c-4010-a82e-aa239c68b291.png"},"f3038751-809b-4583-9661-f0f8f06c6398":{"name":"c_eye","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":10,"looping":true,"frameDelay":12,"version":"mTAFCTz.yQvz37zTm0eF2JIKzzgAwkET","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/f3038751-809b-4583-9661-f0f8f06c6398.png"},"f4e009e9-e078-43cf-91a6-c7f85b659cb9":{"name":"c_eye_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":10,"looping":true,"frameDelay":10,"version":"GxTvoDRACqZVCGWCj.pPVqW0dDuISooj","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/f4e009e9-e078-43cf-91a6-c7f85b659cb9.png"},"4fba785a-5bb7-4d1e-ab48-58433b18d935":{"name":"c_eye_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":10,"looping":true,"frameDelay":10,"version":"JEpg1vxxuyzhqniDPyDJ1NTLYqDhlFEV","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/4fba785a-5bb7-4d1e-ab48-58433b18d935.png"},"94eac152-739e-4c1b-83bb-b2ac420d5533":{"name":"c_eye_dead","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"6Aw6QLj2g4KrNwjOyCy7WGUyMadYk33o","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/94eac152-739e-4c1b-83bb-b2ac420d5533.png"},"e3319cab-87df-4181-89a0-280932ae4283":{"name":"c_eye_dead_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"y0slOktB7M3e2hu1lonSZ1HLivHmOBN7","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/e3319cab-87df-4181-89a0-280932ae4283.png"},"bb327756-ea6a-4426-9680-839962eb3d5d":{"name":"c_eye_dead_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"ev.ujK9b6STSHjoRlgT3xNanqOhTMgEm","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/bb327756-ea6a-4426-9680-839962eb3d5d.png"},"6be512f3-3b4a-4931-8fd6-d539661df545":{"name":"eye_dead","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":true,"frameDelay":1,"version":"QQkU9V4d0DCldmApSKxn60o.rNf02P9c","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/6be512f3-3b4a-4931-8fd6-d539661df545.png"},"69e18f55-e8a8-4165-bd4d-d53bdac1f79e":{"name":"life","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"xFBivrB2loTqbbZziNB42WBpCIp0GdMb","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/69e18f55-e8a8-4165-bd4d-d53bdac1f79e.png"},"f6648074-9840-4279-b44a-3ce151919872":{"name":"life_half","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"L2qynYWEmvnAfMJD2JcYtHdbC.ZL441o","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/f6648074-9840-4279-b44a-3ce151919872.png"},"63cbf24e-7a23-47a4-abeb-6c93badb4d30":{"name":"life_empty","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"OuuyOmDG5wxuqBf3N5rP7jH6D2bJ8FOi","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/63cbf24e-7a23-47a4-abeb-6c93badb4d30.png"},"4c6a1334-b3db-40c1-8b05-718641f70c54":{"name":"c_life","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"q1aNJBrG8Lej0TMNcEP.HXQIzNpbu5zg","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/4c6a1334-b3db-40c1-8b05-718641f70c54.png"},"2f9c63f5-8230-424b-ab02-18ce49ce3f57":{"name":"c_life_night","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"oxHW1AASt5wxN4WAIcHWm6kfOx.I4zcL","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/2f9c63f5-8230-424b-ab02-18ce49ce3f57.png"},"f2eba8dc-9807-4c51-8901-a5854e9ead9c":{"name":"c_life_snow","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"tiUfRYqfWFGZLwYIVR2EAcArdcQrASPq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/f2eba8dc-9807-4c51-8901-a5854e9ead9c.png"},"33b40b46-8e25-4c89-b8c7-31f905f7ba84":{"name":"c_life_half","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"fEMGUGvZk0SFi4_1Wvfgz0nKuyXifBpC","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/33b40b46-8e25-4c89-b8c7-31f905f7ba84.png"},"98ebba4e-9f34-4fe8-9d53-325371c1c72b":{"name":"c_life_half_snow","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"TwbxU0doSnE3AFMAh7lo6lNXXtTM9Yx0","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/98ebba4e-9f34-4fe8-9d53-325371c1c72b.png"},"0cc72f77-1356-4d6e-99e5-b9af52cd21dd":{"name":"c_life_half_night","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"UYXYCVZt.4WkpGu6G8jIQ624uvohq90I","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/0cc72f77-1356-4d6e-99e5-b9af52cd21dd.png"},"ed68999b-a56d-4b5b-8e50-ff5198bccf1d":{"name":"c_life_empty","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"oRhU8Kwo3l90Rz8FY8qIc4dFRfFwq2qG","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/ed68999b-a56d-4b5b-8e50-ff5198bccf1d.png"},"0db4726a-d181-4ca7-8bef-a34bcd8ff920":{"name":"c_life_empty_night","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"KNw_DKqiOLHWZyMJ5_qLycJaDnF5gCOq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/0db4726a-d181-4ca7-8bef-a34bcd8ff920.png"},"862edc44-b63a-4b7d-be7c-f78f5b0d94b8":{"name":"c_life_empty_snow","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"gupTZ9Jv2nsA369y_AZg4raIBtwtVWj2","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":108},"rootRelativePath":"assets/862edc44-b63a-4b7d-be7c-f78f5b0d94b8.png"},"6ed42459-4831-491b-9efc-16897288f075":{"name":"stage_s","sourceUrl":null,"frameSize":{"x":36,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"jAqW6r1M2pY1mXwMNRAIQarde.3DE60m","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":48},"rootRelativePath":"assets/6ed42459-4831-491b-9efc-16897288f075.png"},"8bac9172-6326-4f7c-94bf-143e7a9aa8e8":{"name":"c_stage_s","sourceUrl":null,"frameSize":{"x":40,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"tulxN3muJCaqXNu5O_bf.JLvm3.D7uq.","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":52},"rootRelativePath":"assets/8bac9172-6326-4f7c-94bf-143e7a9aa8e8.png"},"ab89b54f-4b80-4437-ab08-99bc7a9f941d":{"name":"c_stage_s_night","sourceUrl":null,"frameSize":{"x":40,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"PT1jkeU8rQX9xEy2nvsjjLHQJ09PGn4W","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":52},"rootRelativePath":"assets/ab89b54f-4b80-4437-ab08-99bc7a9f941d.png"},"b06258b3-8922-48cd-9247-e579e3ca8b74":{"name":"c_stage_s_snow","sourceUrl":null,"frameSize":{"x":40,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lfiy9TGJmQ2oq28r6TH_ZtsAY.mZn_JG","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":52},"rootRelativePath":"assets/b06258b3-8922-48cd-9247-e579e3ca8b74.png"},"cae4ae47-ac6a-42b1-95aa-9da07036d9b8":{"name":"grass","sourceUrl":null,"frameSize":{"x":96,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"k336yaD5Viy8ZcADACRaZJeMk1Q.zoai","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":48},"rootRelativePath":"assets/cae4ae47-ac6a-42b1-95aa-9da07036d9b8.png"},"9fe048dd-2061-4a7d-b6cb-31037974bb45":{"name":"c_grass","sourceUrl":null,"frameSize":{"x":96,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"5z4osWLfZuvO4DRHYKPJ29bEU4bBW.DH","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":48},"rootRelativePath":"assets/9fe048dd-2061-4a7d-b6cb-31037974bb45.png"},"1d7668c8-ea4c-4c2f-a3a3-8db76bc9fe5d":{"name":"c_grass_night","sourceUrl":null,"frameSize":{"x":96,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"Dwpm4wGINbxNZAkzzz9l4JdhO6xZU3VR","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":48},"rootRelativePath":"assets/1d7668c8-ea4c-4c2f-a3a3-8db76bc9fe5d.png"},"345a62eb-b02b-4b81-90d3-f682aaba1bb0":{"name":"c_grass_snow","sourceUrl":null,"frameSize":{"x":96,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"bNCRvJ07ZMRUkiqhEMQMh0xVafq3sSpW","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":48},"rootRelativePath":"assets/345a62eb-b02b-4b81-90d3-f682aaba1bb0.png"},"09851713-8e54-465e-94d4-e73c65e8fae4":{"name":"cloud","sourceUrl":null,"frameSize":{"x":162,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"LumQoURMKiQYznuwkEVp5iUEVzb1zq74","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":66},"rootRelativePath":"assets/09851713-8e54-465e-94d4-e73c65e8fae4.png"},"3c7a1242-ba06-415f-862b-261c2f391991":{"name":"c_cloud","sourceUrl":null,"frameSize":{"x":162,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"IA41MUkCrh6Db9mcJqTH1trP8aYotmuD","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":66},"rootRelativePath":"assets/3c7a1242-ba06-415f-862b-261c2f391991.png"},"81be3504-9cce-484e-b9c8-f465e885a680":{"name":"c_cloud_snow","sourceUrl":null,"frameSize":{"x":1056,"y":1056},"frameCount":1,"looping":true,"frameDelay":12,"version":"6zYahvP5KAcZ.tLF3Jsi.sUfQpPAFtLU","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":66},"rootRelativePath":"assets/81be3504-9cce-484e-b9c8-f465e885a680.png"},"74cb0903-32b6-4d8c-ac86-7e393aeee589":{"name":"c_cloud_night","sourceUrl":null,"frameSize":{"x":162,"y":66},"frameCount":2,"looping":true,"frameDelay":12,"version":"LuGrnPQjk1ghEqcTbVgBEVL.ULYCuwhf","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":132},"rootRelativePath":"assets/74cb0903-32b6-4d8c-ac86-7e393aeee589.png"},"a1af6b37-cd07-4651-b1ec-e43661c3d320":{"name":"c_pause_menu","sourceUrl":null,"frameSize":{"x":336,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"wOLD77Zax_ZEdW0Yw0uQMle_9TQXwadU","loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":240},"rootRelativePath":"assets/a1af6b37-cd07-4651-b1ec-e43661c3d320.png"},"fb891a9e-38a8-42b2-b6e0-109a2bfdaa0d":{"name":"c_pause_menu_snow","sourceUrl":null,"frameSize":{"x":336,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"F8u7WoZoZoBBA1mZ1wbyI1VL6AlQBKTk","loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":240},"rootRelativePath":"assets/fb891a9e-38a8-42b2-b6e0-109a2bfdaa0d.png"},"89c226db-ea0e-4ccc-84cc-e10ae27e97fb":{"name":"c_pause_menu_night","sourceUrl":null,"frameSize":{"x":336,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"m0qaj_FflTYWC1T.pzr4hwNXP_y4Rn7m","loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":240},"rootRelativePath":"assets/89c226db-ea0e-4ccc-84cc-e10ae27e97fb.png"},"09a61f97-421b-48d3-bb55-86ebe5d4a664":{"name":"c_borderbox","sourceUrl":null,"frameSize":{"x":546,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"SosNlrNlC36FzLfMfCzenNJshKWRrGlx","loadedFromSource":true,"saved":true,"sourceSize":{"x":546,"y":600},"rootRelativePath":"assets/09a61f97-421b-48d3-bb55-86ebe5d4a664.png"},"57803e0c-3faf-42fc-877e-6538bb74d376":{"name":"c_borderbox_snow","sourceUrl":null,"frameSize":{"x":546,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"4cduukgvfehSoLChEIp53i3iCjSyPr1c","loadedFromSource":true,"saved":true,"sourceSize":{"x":546,"y":600},"rootRelativePath":"assets/57803e0c-3faf-42fc-877e-6538bb74d376.png"},"b3fb263d-bc34-493d-b551-d98544f91109":{"name":"c_borderbox_night","sourceUrl":null,"frameSize":{"x":546,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"cg2SFgF9v_bxFNZveP8suMJYdywup1xj","loadedFromSource":true,"saved":true,"sourceSize":{"x":546,"y":600},"rootRelativePath":"assets/b3fb263d-bc34-493d-b551-d98544f91109.png"},"48f5d215-0040-427a-bf56-dcf2c5d1db74":{"name":"borderbox","sourceUrl":null,"frameSize":{"x":546,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"oLdjTkZCt1CZwxueN0UskooT13lPkMHU","loadedFromSource":true,"saved":true,"sourceSize":{"x":546,"y":600},"rootRelativePath":"assets/48f5d215-0040-427a-bf56-dcf2c5d1db74.png"},"63eca405-d1b7-4d7f-a12a-4abbbce213b2":{"name":"c_border","sourceUrl":null,"frameSize":{"x":480,"y":102},"frameCount":6,"looping":true,"frameDelay":12,"version":"X5Pt5zYshXZsbwva2UAEwohQABsmzo8T","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":612},"rootRelativePath":"assets/63eca405-d1b7-4d7f-a12a-4abbbce213b2.png"},"42cb1cdd-fe9d-4ffd-a6bf-2f5f6e0272b2":{"name":"c_border_snow","sourceUrl":null,"frameSize":{"x":480,"y":102},"frameCount":6,"looping":true,"frameDelay":12,"version":"UtsTXhTX9RUG0P6dLP84luv_l1_7C2_8","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":612},"rootRelativePath":"assets/42cb1cdd-fe9d-4ffd-a6bf-2f5f6e0272b2.png"},"53107c46-01e0-489a-aefb-e52d849fa25c":{"name":"c_border_night","sourceUrl":null,"frameSize":{"x":480,"y":102},"frameCount":6,"looping":true,"frameDelay":12,"version":"x4N0WxCM_bc.mjGVGswORnJnfbvPJAa8","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":612},"rootRelativePath":"assets/53107c46-01e0-489a-aefb-e52d849fa25c.png"},"1b0bce59-3e00-4534-952d-ec3216d38089":{"name":"c_border_long","sourceUrl":null,"frameSize":{"x":600,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"MzG0knJcdD1oUMggVboH7GCWsgDZC.hM","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":102},"rootRelativePath":"assets/1b0bce59-3e00-4534-952d-ec3216d38089.png"},"6e4d2d44-d701-4ccf-84de-16b3509b0f5f":{"name":"c_border_long_snow","sourceUrl":null,"frameSize":{"x":600,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"sXJ.KA6_kMaaRaSCmgQ8LocmsRLFl99b","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":102},"rootRelativePath":"assets/6e4d2d44-d701-4ccf-84de-16b3509b0f5f.png"},"b9b94f6f-d50d-4081-a08f-c34014a6de75":{"name":"c_border_long_night","sourceUrl":null,"frameSize":{"x":600,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"niUD17vMmbpEVDxaaY8IY_rKW5bniAXM","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":102},"rootRelativePath":"assets/b9b94f6f-d50d-4081-a08f-c34014a6de75.png"},"926f1b42-5b87-4a7b-801a-9e46558111b2":{"name":"border","sourceUrl":null,"frameSize":{"x":480,"y":102},"frameCount":6,"looping":true,"frameDelay":12,"version":"owUhZ74pWum2SM5Osvg.BWCaFKj8VkxO","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":612},"rootRelativePath":"assets/926f1b42-5b87-4a7b-801a-9e46558111b2.png"},"656f2432-9b7d-40b3-875a-b1f6497ed7d0":{"name":"border_long","sourceUrl":null,"frameSize":{"x":600,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"qYvKB4omOZQ5jw5yQ1Y8BNMQZebWZ9D_","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":102},"rootRelativePath":"assets/656f2432-9b7d-40b3-875a-b1f6497ed7d0.png"},"282be78e-e446-49bc-b514-a1bcf4ba7125":{"name":"pause_menu","sourceUrl":null,"frameSize":{"x":336,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"xL3IV307HXUvT15.S07iTeXuE6vbn0qT","loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":240},"rootRelativePath":"assets/282be78e-e446-49bc-b514-a1bcf4ba7125.png"},"87075927-0b8c-4d23-b643-d4e0fb5c9015":{"name":"selector","sourceUrl":null,"frameSize":{"x":30,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"htatJUHAe2ZfbZzmP3ZYdFX6jf5OPfpK","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":42},"rootRelativePath":"assets/87075927-0b8c-4d23-b643-d4e0fb5c9015.png"},"c145117d-1d4e-4b71-9bfa-794633773aac":{"name":"c_selector","sourceUrl":null,"frameSize":{"x":30,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kh1BCnslIsqyTSMpYYG5pG4lMeBR2uwa","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":42},"rootRelativePath":"assets/c145117d-1d4e-4b71-9bfa-794633773aac.png"},"6ca36461-2aad-40a6-863c-29660ce819ff":{"name":"c_selector_snow","sourceUrl":null,"frameSize":{"x":30,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"utwfMG6HnJMod3eIeA_Lkb2tK56N1DzZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":42},"rootRelativePath":"assets/6ca36461-2aad-40a6-863c-29660ce819ff.png"},"594176c1-25f5-46c7-857c-f84ad62e7640":{"name":"c_selector_night","sourceUrl":null,"frameSize":{"x":30,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"WpFUF3wkpYU2bxjdP9j2wqvHBANQWWeN","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":42},"rootRelativePath":"assets/594176c1-25f5-46c7-857c-f84ad62e7640.png"},"9efa3d0f-abb1-49d1-ae1a-3127193a2b74":{"name":"c_wall_paper_dirt","sourceUrl":"assets/v3/animations/NzWuuQ1RElyv3nuS6JnLm8eDvhvzKSh_z1xSpSU-_6M/9efa3d0f-abb1-49d1-ae1a-3127193a2b74.png","frameSize":{"x":1056,"y":1056},"frameCount":1,"looping":true,"frameDelay":4,"version":"glE8rMKVnokmoF.vERTA73NjX3mNEmGA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1056,"y":1056},"rootRelativePath":"assets/v3/animations/NzWuuQ1RElyv3nuS6JnLm8eDvhvzKSh_z1xSpSU-_6M/9efa3d0f-abb1-49d1-ae1a-3127193a2b74.png"},"28b2065f-1b96-4e22-8781-9d0fb37dd791":{"name":"c_wall_paper_dirt_snow","sourceUrl":"assets/snowBGcool.png","frameSize":{"x":1056,"y":1056},"frameCount":1,"looping":true,"frameDelay":4,"version":"glE8rMKVnokmoF.vERTA73NjX3mNEmGA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1056,"y":1056},"rootRelativePath":"assets/snowBGcool.png"},"247e7652-6e68-43b5-be89-74e7700b50fd":{"name":"c_wall_paper_dirt_night","sourceUrl":null,"frameSize":{"x":1056,"y":1056},"frameCount":1,"looping":true,"frameDelay":12,"version":"2ahGwSshWRCLjmmO4TAvu6Z1s6WzqyYd","loadedFromSource":true,"saved":true,"sourceSize":{"x":1056,"y":1056},"rootRelativePath":"assets/247e7652-6e68-43b5-be89-74e7700b50fd.png"},"3f2e949e-db80-4026-95ca-d4953280c35c":{"name":"c_explosion","sourceUrl":null,"frameSize":{"x":342,"y":342},"frameCount":8,"looping":true,"frameDelay":1,"version":"dyrV6s_CGS.blrY_V_25bueChYoeKRIY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1026,"y":1026},"rootRelativePath":"assets/3f2e949e-db80-4026-95ca-d4953280c35c.png"},"5b452ab8-9f69-4870-8671-e3d9aa05061c":{"name":"c_explosion_night","sourceUrl":null,"frameSize":{"x":342,"y":342},"frameCount":8,"looping":true,"frameDelay":1,"version":"3JSeqOmmIKDcLGD_oGpAx5To_gARsO0l","loadedFromSource":true,"saved":true,"sourceSize":{"x":1026,"y":1026},"rootRelativePath":"assets/5b452ab8-9f69-4870-8671-e3d9aa05061c.png"},"d9260a28-32b3-4752-bd90-b598856b2039":{"name":"c_explosion_snow","sourceUrl":null,"frameSize":{"x":342,"y":342},"frameCount":8,"looping":true,"frameDelay":1,"version":"BF1XxJ3iX23EL8H3WSEN7U4L7DlfWRQK","loadedFromSource":true,"saved":true,"sourceSize":{"x":1026,"y":1026},"rootRelativePath":"assets/d9260a28-32b3-4752-bd90-b598856b2039.png"},"5d29ec8d-58c5-4ba7-b94c-4e54506d80c1":{"name":"explosion","sourceUrl":null,"frameSize":{"x":342,"y":342},"frameCount":8,"looping":true,"frameDelay":1,"version":"KP2KcyqfD5YNUFdw6fuYYNIfhQQBzKlD","loadedFromSource":true,"saved":true,"sourceSize":{"x":1026,"y":1026},"rootRelativePath":"assets/5d29ec8d-58c5-4ba7-b94c-4e54506d80c1.png"},"9dbf2c78-ff27-490a-8b08-437d31e9db71":{"name":"bar","sourceUrl":null,"frameSize":{"x":40,"y":8},"frameCount":10,"looping":true,"frameDelay":12,"version":"s7f1wAnRAC0.NZnAkuY02ZLJInoxhIgq","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":80},"rootRelativePath":"assets/9dbf2c78-ff27-490a-8b08-437d31e9db71.png"},"bd983982-e227-41a2-9368-b344e1152adf":{"name":"c_bar","sourceUrl":null,"frameSize":{"x":40,"y":8},"frameCount":10,"looping":true,"frameDelay":1,"version":"U8F_cJ1f2Jj3Nz_Lg.kG9P7i9WxedjoB","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":80},"rootRelativePath":"assets/bd983982-e227-41a2-9368-b344e1152adf.png"},"24be5a4e-28d3-4b1d-a36f-cbf58b314014":{"name":"c_bar_night","sourceUrl":null,"frameSize":{"x":40,"y":8},"frameCount":10,"looping":true,"frameDelay":1,"version":"rkhYZV2TMjxvbbFJGnrby.XQULjQA.Nh","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":80},"rootRelativePath":"assets/24be5a4e-28d3-4b1d-a36f-cbf58b314014.png"},"db9b6547-8581-4a51-97ca-5dabab1d0210":{"name":"c_bar_snow","sourceUrl":null,"frameSize":{"x":40,"y":8},"frameCount":10,"looping":true,"frameDelay":1,"version":"nWceDHEIKnHRLnzauV_74RPMZjBQq_7N","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":80},"rootRelativePath":"assets/db9b6547-8581-4a51-97ca-5dabab1d0210.png"},"7e5a4b29-f9c3-419b-bd73-8309045d0b32":{"name":"gigaCube","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"8_1fL_y4ITNiPiRsCnQvv8D9w0JVDUDA","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/7e5a4b29-f9c3-419b-bd73-8309045d0b32.png"},"6369ee94-e640-4b46-a9c3-a39501d7ab38":{"name":"c_gigaCube","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"1Z3sgHbuHs.FtctFwT.5dHt1vN5bTY3t","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/6369ee94-e640-4b46-a9c3-a39501d7ab38.png"},"88bc3e07-3e34-49cf-aa33-e78f1a3c0a21":{"name":"c_gigaCube_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"bjlV31zWrVHcXe49JKhoKR8XoYeogCwP","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/88bc3e07-3e34-49cf-aa33-e78f1a3c0a21.png"},"8622636a-62c4-4166-8676-16997e4a2449":{"name":"c_gigaCube_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"AjjFXDkFUuhPzg624B9tmlfJ3XPWadLq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/8622636a-62c4-4166-8676-16997e4a2449.png"},"0fcac30f-5453-4985-9e19-cb0eccc439c6":{"name":"tripleJump","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"CY_4UxFm0JXpJknkJeZmA6LmtsKlfSXN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/0fcac30f-5453-4985-9e19-cb0eccc439c6.png"},"dbfbf6f0-25fd-439a-b035-95e424ae23fe":{"name":"c_tripleJump","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"7jFNEKUkow5v81tUCGUPiTC3_AlF4UOM","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/dbfbf6f0-25fd-439a-b035-95e424ae23fe.png"},"5b891c3b-48af-471e-9107-c6b549e1505a":{"name":"c_tripleJump_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"rBLQwwz8kKMGj3KqNvSUTIy8bSDKei.1","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/5b891c3b-48af-471e-9107-c6b549e1505a.png"},"17a3d4cc-e58a-46d3-b7ed-4958aa43f1f9":{"name":"c_tripleJump_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"2vxDn32rpmPYr7Pio1lL07NlE57pZy3q","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/17a3d4cc-e58a-46d3-b7ed-4958aa43f1f9.png"},"2229f983-6f43-48f8-b4f7-e10fec183049":{"name":"thornArmor","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"GJN3_VulOTDi1klHecRcIM2hmCnNzNZk","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/2229f983-6f43-48f8-b4f7-e10fec183049.png"},"239d784a-9d89-4781-a548-655744939701":{"name":"c_thornArmor","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":".lsBiC796vKZ5OKMeXb8CzuNbJKWWfNN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/239d784a-9d89-4781-a548-655744939701.png"},"f6ba5693-4ec1-456b-8114-9d12b97bb6b0":{"name":"c_thornArmor_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"fLgx2768RfrlC7TfyzwTarJngofz2KAs","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/f6ba5693-4ec1-456b-8114-9d12b97bb6b0.png"},"6c0e6cbb-c925-4fd6-a6cf-288272ee9cfb":{"name":"c_thornArmor_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"tN5eC4RjzEUmROcYq0AFETN15W_ecZq8","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/6c0e6cbb-c925-4fd6-a6cf-288272ee9cfb.png"},"f67f9bb5-72be-416e-9825-5febc3b83a75":{"name":"quakeStun","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"9aQ24kREv_WqNb4DRwXfzkwK.KgZIc6G","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/f67f9bb5-72be-416e-9825-5febc3b83a75.png"},"e461ba37-114d-4b50-a7fa-c438499a352b":{"name":"c_quakeStun","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"gygArIS04VNULlFkJzy6NUFeNHoUFqok","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/e461ba37-114d-4b50-a7fa-c438499a352b.png"},"6648df2f-0e87-4e91-8add-6ed210eb0ada":{"name":"c_quakeStun_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"Z2QXIUPkzHOh_WflokAgYSt_pGRv3vMS","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/6648df2f-0e87-4e91-8add-6ed210eb0ada.png"},"6bc1a5f2-16b5-468f-87a9-06d8cf59c7a1":{"name":"c_quakeStun_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"pzuJ4Bplgq0X4Xfu6ZzQEHV.ZVcaS4eu","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/6bc1a5f2-16b5-468f-87a9-06d8cf59c7a1.png"},"aca04930-3f3d-404f-9901-98b1e993a602":{"name":"superKinetic","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"1ynNF1hvBwvYJ7lhjht.i6DCuCkzzvzn","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/aca04930-3f3d-404f-9901-98b1e993a602.png"},"6e69592b-7f93-429d-beaa-0e1527555e90":{"name":"c_superKinetic","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"Rh8cDL2ELSZ0qqLaH817h1b193RD40Nl","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/6e69592b-7f93-429d-beaa-0e1527555e90.png"},"b07ed96f-3616-4990-8e95-0cd5a69ffdcc":{"name":"c_superKinetic_night","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"IvIE.mFo_bJHBES7EdjNfrI1QHqDKaUe","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/b07ed96f-3616-4990-8e95-0cd5a69ffdcc.png"},"3c6961e4-4287-4b01-add8-a7081017e604":{"name":"c_superKinetic_snow","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"48TA7Iohjbl8TWdrtQxoikaHOvnQbAEf","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/3c6961e4-4287-4b01-add8-a7081017e604.png"},"eaf095c7-8f07-496a-ad7f-e9c997297f1e":{"name":"INVISIBLE","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"wXrKLqZcfHy0fkjobEPQev1rd_X3xnfH","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/eaf095c7-8f07-496a-ad7f-e9c997297f1e.png"},"a4491827-f3d6-42bf-83c8-1dd09e61ecf1":{"name":"c_stun","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":12,"looping":true,"frameDelay":3,"version":"sr3iLJIWaFsl1NpjfG2r670P1pOgUvQJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/a4491827-f3d6-42bf-83c8-1dd09e61ecf1.png"},"59950b95-7dd0-4572-a9ec-52c738dd60fa":{"name":"c_stun_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":12,"looping":true,"frameDelay":3,"version":"Nrb3TV6tMlIdtmIgN3Wl44WtroX20SWE","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/59950b95-7dd0-4572-a9ec-52c738dd60fa.png"},"da5eaed8-4493-4898-bc0f-b976576ace26":{"name":"c_stun_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":12,"looping":true,"frameDelay":3,"version":"rYhXQv47gDQ.qbN1vKPX6FqBh5p1Eqco","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/da5eaed8-4493-4898-bc0f-b976576ace26.png"},"7e66a345-0806-4e8d-a9e8-2456a9004d77":{"name":"stun","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":12,"looping":true,"frameDelay":3,"version":"afEen6pvcJCrRlJhrhU9uOCcJPath_1O","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/7e66a345-0806-4e8d-a9e8-2456a9004d77.png"},"9420c561-b370-4a55-93e0-ecdf26b33308":{"name":"c_dig","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":7,"looping":true,"frameDelay":1,"version":"Y7eTcH7TXS7njkyJ3vgd1wqB.ktULsYC","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":144},"rootRelativePath":"assets/9420c561-b370-4a55-93e0-ecdf26b33308.png"},"8103c9f1-eb46-4db4-8e95-a1b357a28ec2":{"name":"c_dig_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":7,"looping":true,"frameDelay":1,"version":"VQaR6bddgisi51WdXXZrVmAgvfvbBP9F","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":144},"rootRelativePath":"assets/8103c9f1-eb46-4db4-8e95-a1b357a28ec2.png"},"a0801334-fdb2-45e9-bc1b-95d264ff6e7c":{"name":"c_dig_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":7,"looping":true,"frameDelay":1,"version":"p3mJsFwR1.O58BTrFU63jSz5VIqeGJBh","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":144},"rootRelativePath":"assets/a0801334-fdb2-45e9-bc1b-95d264ff6e7c.png"},"ff1f1460-38cb-4a05-9629-831d3cdce9ca":{"name":"dig","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":7,"looping":true,"frameDelay":1,"version":"Es8rIj3EBgaFMuLRB5a3ha6RBbfeFy.O","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":144},"rootRelativePath":"assets/ff1f1460-38cb-4a05-9629-831d3cdce9ca.png"},"ea26e9f0-9be1-4384-bfd4-bc45814c4eb1":{"name":"c_Mr. habanero","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"ndh6VcqbhcfgIi75XQ9GXbIC2FGSKBB3","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/ea26e9f0-9be1-4384-bfd4-bc45814c4eb1.png"},"ea32a407-bab8-4098-8000-51c11c74aa95":{"name":"c_Mr. habanero_night","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"VAwUgwidjQQc.6ZRHmiW5Jafh4Xtx1I5","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/ea32a407-bab8-4098-8000-51c11c74aa95.png"},"edbbad0c-773e-45cd-b074-0b38286d3ec5":{"name":"c_Mr. habanero_snow","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"p_mQAPpBsg080I7XOgF16N6mANNixDNo","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/edbbad0c-773e-45cd-b074-0b38286d3ec5.png"},"4c40a5e7-197f-4f46-b09e-4ed0fc386bb9":{"name":"Mr. habanero","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"wyKInSp6b2YQnJEu.FYfT_RFNT57t0J6","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/4c40a5e7-197f-4f46-b09e-4ed0fc386bb9.png"},"4cd1ab82-b421-4e8d-bee5-c14cb384112e":{"name":"c_logo","sourceUrl":null,"frameSize":{"x":720,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"7BQ0bpgO_8DSFy4Y1eR4zUIEx2PaaQg3","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":264},"rootRelativePath":"assets/4cd1ab82-b421-4e8d-bee5-c14cb384112e.png"},"58a977de-679f-4ebf-bbef-17ec67f72d11":{"name":"c_logo_night","sourceUrl":null,"frameSize":{"x":720,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"rm0L6Kvj8X2RoXfaUS16RSyd..VZt8jC","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":264},"rootRelativePath":"assets/58a977de-679f-4ebf-bbef-17ec67f72d11.png"},"602247ba-1ef7-479a-909d-9bf7ad059cb9":{"name":"c_logo_snow","sourceUrl":null,"frameSize":{"x":720,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"n0D9o2py7jkrZaOwubBBGVfLy0kwMpxr","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":264},"rootRelativePath":"assets/602247ba-1ef7-479a-909d-9bf7ad059cb9.png"},"cfdbfb2a-6be4-428a-b3cc-87d01ad15355":{"name":"logo","sourceUrl":null,"frameSize":{"x":720,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"lXhcvPT0U6GHhAQWQYsaYgvfr6EWJ1Iw","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":264},"rootRelativePath":"assets/cfdbfb2a-6be4-428a-b3cc-87d01ad15355.png"},"a05b7638-22a3-4800-a8f4-795a30312312":{"name":"sound","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"XdotOGyfyCbxWxkFagEhBjVeZ6SS679O","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/a05b7638-22a3-4800-a8f4-795a30312312.png"},"1e3b205c-a09c-4d6a-9cc9-9c345f989f78":{"name":"c_sound","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"nlBHTgfBDs1FrizQIblSdXj0iLNV5LKD","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/1e3b205c-a09c-4d6a-9cc9-9c345f989f78.png"},"bfa422ca-49e6-4d59-960c-191854fb4352":{"name":"c_sound_night","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"k2I5I6tXJOu73xkeBOI3Z3z8KOu9kXhB","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/bfa422ca-49e6-4d59-960c-191854fb4352.png"},"49004989-870a-42d4-86e5-948ade62fcf4":{"name":"c_sound_snow","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"YtVv1Ypfiq5hgNeSwgzA3rG4WGNRtvd5","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/49004989-870a-42d4-86e5-948ade62fcf4.png"},"021c0a46-745e-4832-9d1d-b5e7fa6e3c89":{"name":"c_music","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"GSE5dN.Lr.6Mayxv4HBhAQZXmnKQ8qWi","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/021c0a46-745e-4832-9d1d-b5e7fa6e3c89.png"},"838f1e9e-3707-4ad0-9cd1-e8bdc0272e19":{"name":"c_music_snow","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"CcTw_g2RX03EwAnFr6qYxES.UQw.7rbm","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/838f1e9e-3707-4ad0-9cd1-e8bdc0272e19.png"},"5b176464-9e8e-4ed1-b158-5f2636d15e9f":{"name":"c_music_night","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"Opv2RCK1r78CIXbLM4Y4jfeFp71qu7rv","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/5b176464-9e8e-4ed1-b158-5f2636d15e9f.png"},"c30ddec4-8ea4-4fa4-a9b9-dd90a29b8946":{"name":"music","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"0XavG4w9tBfvSk30TcQ5wRT6vb31Lff2","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":48},"rootRelativePath":"assets/c30ddec4-8ea4-4fa4-a9b9-dd90a29b8946.png"},"57315c19-1608-4fcb-819c-191f60caeb4e":{"name":"boss","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"5DQ5ZrH1EGQdKZDwWlnRekP7yYof17_F","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/57315c19-1608-4fcb-819c-191f60caeb4e.png"},"2fb05c54-2224-4790-8dc5-95e0af91026e":{"name":"c_cube_bcb","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"3h9vsyyZnphRl48ND6XpBsRd3cMz8_8m","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/2fb05c54-2224-4790-8dc5-95e0af91026e.png"},"f6215032-071b-4f9a-9d81-a9b51c17db96":{"name":"c_cube_squish_bcb","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"GDMTylS5kUzsPnyEj7zogNkKetiEuLsD","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/f6215032-071b-4f9a-9d81-a9b51c17db96.png"},"bc7e33ac-7c03-4906-9cc8-154eec5ee080":{"name":"c_cube_dice","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"ldyE1RMoG46qL2P8e3Y7NTX6yMUfx1LC","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/bc7e33ac-7c03-4906-9cc8-154eec5ee080.png"},"2b537681-abd1-40c7-9aaa-cd0ea2170ba5":{"name":"c_cube_squish_dice","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"ujH0N2VdPjZhZ371SagIX06pyqAScG5c","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/2b537681-abd1-40c7-9aaa-cd0ea2170ba5.png"},"d9ea3eab-b686-451b-8d26-2b31f2317cd3":{"name":"c_cube_broken","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"TS1ZQrkUUlwN7l_p89y0NjseozI0t.Vf","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/d9ea3eab-b686-451b-8d26-2b31f2317cd3.png"},"e2df3b97-e398-4ac9-b697-6af7c0633309":{"name":"c_cube_squish_broken","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Vbvwgx3gdEI_HNWryyb5R6ZninIBz3xS","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/e2df3b97-e398-4ac9-b697-6af7c0633309.png"},"ddce3903-7565-403e-a1b6-9ae28da097da":{"name":"c_cube_smiley","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"J8hPQ2cSVvMKldioALyeAsu.tv4qbE0w","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/ddce3903-7565-403e-a1b6-9ae28da097da.png"},"e09f79de-e021-40f5-9410-6131acf3effc":{"name":"c_cube_squish_smiley","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"4HAGHWr5kx.cIy2zPwMF4aezeY3FdhaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/e09f79de-e021-40f5-9410-6131acf3effc.png"},"0ae953cc-f2df-4142-859e-0f8265921696":{"name":"c_cube_rnb","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"A2Q0tEm9zG0teThNE0aycR70MJS1Y28j","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/0ae953cc-f2df-4142-859e-0f8265921696.png"},"dad32831-404a-4ac1-bd68-e679ffc59270":{"name":"c_cube_squish_rnb","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"eSMvSnIOye6WhJBGrIbT_XQdqchoSTT6","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/dad32831-404a-4ac1-bd68-e679ffc59270.png"},"92c607d0-137d-4b22-ad0f-c8ff022f7197":{"name":"c_cube_anvil","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"7IHwOCvpzdiKjJBGN8Wgvw8swSi63.ho","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/92c607d0-137d-4b22-ad0f-c8ff022f7197.png"},"91bb7e3e-b0c3-458e-9085-fe30b6319cf5":{"name":"c_cube_squish_anvil","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"PDHyY29Wzoc3ETl_VqPEhSH6pEpT7u4y","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/91bb7e3e-b0c3-458e-9085-fe30b6319cf5.png"},"d0fd3f10-df76-464f-873e-b9d3260876b4":{"name":"c_cube_pink","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"l3U9Nridl9IoY4_lrKrfDbkerZP4DtAF","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/d0fd3f10-df76-464f-873e-b9d3260876b4.png"},"111cd793-1ce1-4454-b973-0f59b4c1c249":{"name":"c_cube_squish_pink","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"vBNTWeC0Mckpz9_beYmaXfK4SysmiDEf","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/111cd793-1ce1-4454-b973-0f59b4c1c249.png"},"53a7ef38-b1d2-4d60-8c55-71bbd3f61ee1":{"name":"c_cube_eye","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"0BLAvJQCYMqwTMNmLBaWhE166dE54z7_","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/53a7ef38-b1d2-4d60-8c55-71bbd3f61ee1.png"},"b5561574-b837-4b56-804a-001c31e28588":{"name":"c_cube_squish_eye","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"FEc2LDiuvRwDSVC_nKoPCtxzXv2Ah0PU","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/b5561574-b837-4b56-804a-001c31e28588.png"},"d7b6210b-e49c-4365-bdea-0947929c005a":{"name":"c_cube_copper","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"gJCD9Hd9LAxttpmJVrdVXQGj1xbqprXy","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/d7b6210b-e49c-4365-bdea-0947929c005a.png"},"fe95673f-d3cb-40a9-8131-9cc1829ee706":{"name":"c_cube_squish_copper","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"wMkrtI9gd0fW7JVBeIDUglt8ERI23er.","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/fe95673f-d3cb-40a9-8131-9cc1829ee706.png"},"28ed849b-2484-4767-ae27-599478d42ca9":{"name":"c_cube_amythest","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"ky2rNHU4R6JmuJcL9r8InzZ_WCLYniRl","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/28ed849b-2484-4767-ae27-599478d42ca9.png"},"db562e47-9754-4e39-befd-6b28c1f0786d":{"name":"c_cube_squish_amythest","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"5n4ZvfFN8nyGHmNpGOEsaAw8Guix0PVy","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/db562e47-9754-4e39-befd-6b28c1f0786d.png"},"a24ba779-faf6-4c87-9031-4248be92fd93":{"name":"c_cube_charcoal","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"HXdPeSYavT.wYpp3K6dLyivpd_3pwUP5","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a24ba779-faf6-4c87-9031-4248be92fd93.png"},"74b24791-120b-46b7-b7e5-272ac366e2dc":{"name":"c_cube_squish_charcoal","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"vzjEIF0i55q7OIprwt9aqwsjzCHw5AmD","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/74b24791-120b-46b7-b7e5-272ac366e2dc.png"},"c038f0b9-bf9c-4331-98e5-c051903502bf":{"name":"c_cube_emerald","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"FR_TqbH8SRXoBf5fDcVFwZohziNOdBi4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/c038f0b9-bf9c-4331-98e5-c051903502bf.png"},"47a5d8e7-44eb-498d-9660-3c812fbcc249":{"name":"c_cube_squish_emerald","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"svocknFs0kF2quYzN9IEN.AYaVU3_k8M","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/47a5d8e7-44eb-498d-9660-3c812fbcc249.png"},"5c4c262f-2743-4e04-8f6d-4b38e6a63b52":{"name":"c_cube_ruby","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"BFxaEoCKQGE5s1REAbTXFkpDasETCoqj","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/5c4c262f-2743-4e04-8f6d-4b38e6a63b52.png"},"f6b0bb02-7a96-4190-afdc-f4c83dea4191":{"name":"c_cube_squish_ruby","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"QC8xt3GDb3hLaY3HmK5amqUo5UxptLZg","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/f6b0bb02-7a96-4190-afdc-f4c83dea4191.png"},"317489b1-d08d-4dae-8a7f-bda294007f55":{"name":"c_cube_gold","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"kDGCI6.A_IFKvhfkdzjJh6PGUa_kVmpL","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/317489b1-d08d-4dae-8a7f-bda294007f55.png"},"c8fc4af4-5cc4-41cf-90c3-b9a1e69853b1":{"name":"c_cube_squish_gold","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"JHflF_IGh7GIH3geOPENZlTcogqlP587","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/c8fc4af4-5cc4-41cf-90c3-b9a1e69853b1.png"},"c0668b67-481c-486d-a051-169c7c044c58":{"name":"c_cube_quad","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Fab73QhbotMu9Z7zrNypQdJsyFyCL0Sx","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/c0668b67-481c-486d-a051-169c7c044c58.png"},"6df5886c-7209-4387-aae9-663c7e1f52de":{"name":"c_cube_squish_quad","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"v66zGgstJohZUkuUMVkTQS3dgqlFE.EY","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/6df5886c-7209-4387-aae9-663c7e1f52de.png"},"b3fd0076-39ee-4383-b60a-4bde798c0239":{"name":"c_cube_chief","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Fw2OL9cfONvVzw5wMCVUkDvQdRrZFrp4","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/b3fd0076-39ee-4383-b60a-4bde798c0239.png"},"b781c3f8-f983-4b46-9d82-defdb278f597":{"name":"c_cube_goggles","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"3W0nxJKisxgMMMU1s9_XdSivSCItQax9","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/b781c3f8-f983-4b46-9d82-defdb278f597.png"},"455dd81f-4565-46fd-acf7-74ad40257375":{"name":"c_cube_cool","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"xBBGEIB8Eqm9gEjIYU2Ng_BjxriFPG0.","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/455dd81f-4565-46fd-acf7-74ad40257375.png"},"2bf740ba-c62a-4860-9fc7-21cc7ca62798":{"name":"c_cube_face","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"azWB19YmEfmMaQkn2Ypgmxb9iG9B9anQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/2bf740ba-c62a-4860-9fc7-21cc7ca62798.png"},"91a8c01d-53d1-41aa-8c2a-2fcbe6baf02a":{"name":"c_cube_squish_face","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Tv1myZxyHn8rltbCWUnotjUJkDKho9ea","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/91a8c01d-53d1-41aa-8c2a-2fcbe6baf02a.png"},"0d6e4bc3-7cac-43a2-8375-e3102309ea11":{"name":"c_cube_squish_cool","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Yk4ZxFlKYaqa_i0_625Z5y1ubBft4mH0","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/0d6e4bc3-7cac-43a2-8375-e3102309ea11.png"},"a8f6c7dd-53b1-467a-a293-12e4d9b140b3":{"name":"c_cube_squish_goggles","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"VsubnV683vbE7V8oh.zndltQ.HeLL43p","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/a8f6c7dd-53b1-467a-a293-12e4d9b140b3.png"},"82da2144-5da6-438e-9397-fa3d9ab0f89c":{"name":"c_cube_squish_chief","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"Ny2YoYhqFhfiwH7hW1ddytkTRB8WDwsO","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/82da2144-5da6-438e-9397-fa3d9ab0f89c.png"},"82dd9025-d732-47c2-a0e8-08af24c6a572":{"name":"c_cube_excite","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"DzAJubr3zJugQ_0mZXFdNeINzfsuXMrO","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/82dd9025-d732-47c2-a0e8-08af24c6a572.png"},"963de960-14f4-48f5-a13b-843c235c67ea":{"name":"c_cube_angry","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"BP961de_cIIt5qc55MNuqwJc44_cgB3T","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/963de960-14f4-48f5-a13b-843c235c67ea.png"},"a117376d-da33-4fcb-aae6-fef593173139":{"name":"c_cube_crazy","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"fHCv1qkjdgG4u7ewU_OxVZlG0VGmt.sw","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a117376d-da33-4fcb-aae6-fef593173139.png"},"8cd6647c-836a-49f0-a427-e89a00ce619e":{"name":"c_cube_shock","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"1_gRwsAPjOU2IwzMD6XExTz9OZs0SaEw","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/8cd6647c-836a-49f0-a427-e89a00ce619e.png"},"7c680685-20ce-4c96-934b-cd6b8858ad24":{"name":"c_cube_cute","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"2XM_6GUOpiQTYeweomCo_XdGEeGdB297","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/7c680685-20ce-4c96-934b-cd6b8858ad24.png"},"1482ab4f-4a99-4627-89f7-40de01b80698":{"name":"c_cube_mon","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"JGAlZVRW9YfcgkfhCSv9h3F_foT_251v","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/1482ab4f-4a99-4627-89f7-40de01b80698.png"},"68d7e96a-31d8-4692-8d59-cbb6ce5a34ba":{"name":"c_cube_squish_mon","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"JT4dGweT8RTb6VsS3yQtx9Il2xKQ3JOB","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/68d7e96a-31d8-4692-8d59-cbb6ce5a34ba.png"},"eabbdc07-4980-4cd5-94cb-5afbe0591793":{"name":"c_cube_squish_cute","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"bga8IiEXpwfzYoCzyqPDFg2Bwmsaoerv","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/eabbdc07-4980-4cd5-94cb-5afbe0591793.png"},"249a990d-e42f-457d-93d6-50b3e5172849":{"name":"c_cube_squish_shock","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"PDVz5MZxkafi2YoG8pAsvFpH3FsEBOim","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/249a990d-e42f-457d-93d6-50b3e5172849.png"},"31a48312-0daa-479d-ab75-6c51f283caa4":{"name":"c_cube_squish_crazy","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"sQU5g6Dpk8TiTb_7YV4hbcIvLz1qobG0","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/31a48312-0daa-479d-ab75-6c51f283caa4.png"},"55f0dca3-6acc-49b2-b855-31b1a6f9b263":{"name":"c_cube_squish_angry","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"7Kkieets7uYCEdhIzIMTDlfGt0xnRdvv","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/55f0dca3-6acc-49b2-b855-31b1a6f9b263.png"},"31dadbe8-e78a-48ae-90dc-e5e44219c99b":{"name":"c_cube_squish_excite","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"JIfM0sSJVI7G6tpUk5bnps4ipNEfg39a","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/31dadbe8-e78a-48ae-90dc-e5e44219c99b.png"},"116ef312-1671-49ef-a55e-f70a2651a725":{"name":"c_cube_gory","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"afbGvPzqGsWcT1w0oscqOObV8Nz_vPyJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/116ef312-1671-49ef-a55e-f70a2651a725.png"},"be4d9c17-7dd8-450b-8c5c-4b215241975e":{"name":"c_cube_squish_gory","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"LXhIIPnMkH_DZRmhlMN0X174Nsxxt9GO","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/be4d9c17-7dd8-450b-8c5c-4b215241975e.png"},"06ca2590-603e-48d0-a070-1bc5a967e0c5":{"name":"c_cube_tophat","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"ffsFo2YHyJUJWwsex1U7kbLLBfkEYokc","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/06ca2590-603e-48d0-a070-1bc5a967e0c5.png"},"f69856f6-e38d-427f-b57e-f243feb55b0d":{"name":"c_cube_squish_tophat","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"QNXrZxE60.P8dSRJThKLe9k.IpDh7BDL","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/f69856f6-e38d-427f-b57e-f243feb55b0d.png"},"05bb9244-cdcf-4e47-8c0b-ae043066030f":{"name":"c_cube_geo","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"DB0lPfeMDHZJBrs3X1iEum.kHDtTuA7r","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/05bb9244-cdcf-4e47-8c0b-ae043066030f.png"},"f03e7135-0e68-40fa-9a24-8c5067972bed":{"name":"c_cube_squish_geo","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"TqSFN.6WCk4MGs8LIjo.OfLa2WcXnstc","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/f03e7135-0e68-40fa-9a24-8c5067972bed.png"},"a17a9c49-8590-4d49-9d65-1d51d3da43b3":{"name":"c_cube_box","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"o69Y3vtAaaMntNtHlVn5T5K9nAwesziR","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a17a9c49-8590-4d49-9d65-1d51d3da43b3.png"},"5a895b05-f593-47e3-8297-b98a320fc928":{"name":"c_cube_darkbox","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"oWtllAMCNFlnRldNX4lIWdIFq5OT2KfT","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/5a895b05-f593-47e3-8297-b98a320fc928.png"},"56bee997-b105-4af6-ab39-c333a9bfe525":{"name":"c_cube_squish_box","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"CB0H2k01wJM28EoseX4khRWtn6AIHcLs","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/56bee997-b105-4af6-ab39-c333a9bfe525.png"},"72f294ea-4ee6-4cc7-812a-c8a5908e2a24":{"name":"c_cube_squish_darkbox","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"moDv8TSI1GljWp3pVF77YFcxV2wicf2x","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/72f294ea-4ee6-4cc7-812a-c8a5908e2a24.png"},"7b28d818-16ff-4e64-b6d0-328e4ef1d8a3":{"name":"c_cube_col","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"y5vgqmsptwMh6AMftgTTmOATUebFjaTO","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/7b28d818-16ff-4e64-b6d0-328e4ef1d8a3.png"},"3b22beb5-75e5-4e16-b458-a135ca1906d7":{"name":"c_cube_squish_col","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"_Mpl7hRNKQLvsJLidDivsO76OBdOMY9q","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/3b22beb5-75e5-4e16-b458-a135ca1906d7.png"},"0dfe6748-6f0a-4f3b-bb32-509d9839b6ff":{"name":"c_cube_pepper","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"ValcM55PkQq12VQWGylVuXOvXNaRrjdu","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/0dfe6748-6f0a-4f3b-bb32-509d9839b6ff.png"},"11f8102d-792d-4c5b-b31b-5e64362767c4":{"name":"c_cube_squish_pepper","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"GBcgsN0eUw3okeFS5_r.03QyTR7QKDMo","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/11f8102d-792d-4c5b-b31b-5e64362767c4.png"},"c6c423e1-4d24-432c-9475-9aba476ed0c0":{"name":"c_cube_bc","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"v7jZqyO641ANRhAHS.b8ZlTO1SEx9RTA","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/c6c423e1-4d24-432c-9475-9aba476ed0c0.png"},"11142c3b-0ded-4287-bd56-5d12646ae01c":{"name":"c_cube_squish_bc","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"t8fMGBM4gaxybs58MysgmIa58d7Ed.V3","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/11142c3b-0ded-4287-bd56-5d12646ae01c.png"},"0c169168-aa80-4e6f-b99b-3b7e344248d3":{"name":"c_cube_thorn","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"POM1QmU8kgaFS8ksE8ZyY_MAScDbvo6y","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/0c169168-aa80-4e6f-b99b-3b7e344248d3.png"},"16914a3d-7144-4465-babb-b6c78a8730c1":{"name":"c_cube_squish_thorn","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"MNYARqaMHZk_wrT6g.RuR6quLdeeeDv0","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/16914a3d-7144-4465-babb-b6c78a8730c1.png"},"dafea2b3-4ae8-4f75-8085-db7eb4902c3d":{"name":"c_cube_evileye","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"yrQgMiWoayGmMWqxPksXtI5JIVQqEj8g","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/dafea2b3-4ae8-4f75-8085-db7eb4902c3d.png"},"2f545273-92e2-4ea7-875e-7b21aecfd3e1":{"name":"c_cube_squish_evileye","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"F4j9iru66jP.iQqZlEkguEjWB3Hrdqsf","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/2f545273-92e2-4ea7-875e-7b21aecfd3e1.png"},"e26dc931-550a-4974-8604-c6d7349864fc":{"name":"c_cube_3d","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"DY3zKczOvbPGk92U2rbX6orXkeWygVmE","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/e26dc931-550a-4974-8604-c6d7349864fc.png"},"80765c01-5e13-4c55-b9f5-2d63ea948295":{"name":"c_cube_squish_3d","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"O61l554AxcR4YlEd4tGbNoXTlRTWDqnh","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/80765c01-5e13-4c55-b9f5-2d63ea948295.png"},"033da317-eca6-4690-b7c8-74793e9a4908":{"name":"c_cube_spiral","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"q46Ou2tVhx06v2QaJ2DEmP5FiMsDiVkY","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/033da317-eca6-4690-b7c8-74793e9a4908.png"},"68b69b26-1d66-4bfd-8fea-56eb3e966d62":{"name":"c_cube_squish_spiral","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"xfyR9EtYTCNjxnKvCQlSuBLj1gcXNlV3","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/68b69b26-1d66-4bfd-8fea-56eb3e966d62.png"},"3fd822a2-cf69-4194-92a4-84e16d53aa94":{"name":"c_cube_man","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"sX2mf.iVIIE7LEWLam4F5LAk3UkmpMKI","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/3fd822a2-cf69-4194-92a4-84e16d53aa94.png"},"3c35f0a1-e554-49a0-bd74-a4209acb73f4":{"name":"c_cube_squish_man","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"AB7_wbqK6i24bKqx9h2XGk9j1eh7Gpby","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/3c35f0a1-e554-49a0-bd74-a4209acb73f4.png"},"a87523aa-9b54-4c39-aa47-1451f446f272":{"name":"c_cube_heart","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"JxDzT6Apj8D5Op9fcDI4EdCyD7FyxjUc","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a87523aa-9b54-4c39-aa47-1451f446f272.png"},"c1da653c-cc31-41ad-9138-ff1e1d12c5e3":{"name":"c_cube_squish_heart","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"b7X.FYEli6zGupgvQVzaD2FIrGklSQLF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/c1da653c-cc31-41ad-9138-ff1e1d12c5e3.png"},"53579577-9385-4abe-ab95-3c3bd9acacbc":{"name":"c_cube_star","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"y3P0YaEcb3HbdM76cWvsJgYsKNsYZu25","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/53579577-9385-4abe-ab95-3c3bd9acacbc.png"},"0681e2b4-0ef7-4330-bd6d-18a44fc5a240":{"name":"c_cube_squish_star","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"EKlIrJFLc4Drkgam0CCP0EnHskK.8Ida","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/0681e2b4-0ef7-4330-bd6d-18a44fc5a240.png"},"fdf73570-454a-4c54-af6e-21ab4de6877b":{"name":"c_cube_spooky","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"4QkdRZX5MMo_hlACjEFzFyqyEVGlmp_d","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/fdf73570-454a-4c54-af6e-21ab4de6877b.png"},"efe766fd-aec1-48f4-ba15-173248c63aa3":{"name":"c_cube_squish_spooky","sourceUrl":null,"frameSize":{"x":60,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"SGlUkc27uJ8C64CSw_ntSH5rhaoIm32l","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":96},"rootRelativePath":"assets/efe766fd-aec1-48f4-ba15-173248c63aa3.png"},"c65661fc-1376-428c-832b-b3d832a0802f":{"name":"test_sprite","sourceUrl":null,"frameSize":{"x":86,"y":54},"frameCount":2,"looping":true,"frameDelay":1,"version":"cXJ1KBEiVfWy7Obl33O8C6RC3bVdefRD","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":108},"rootRelativePath":"assets/c65661fc-1376-428c-832b-b3d832a0802f.png"},"9a7c328c-026c-4d65-9cc5-12452ab3ba63":{"name":"Have_fun_playing_bloquake","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"N6E2Vxrdx6CMSwtl6qePn.YIOGv._cnn","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/9a7c328c-026c-4d65-9cc5-12452ab3ba63.png"}}};
  }
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });
  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----
/*
		--------------
		CONFIGURATIONS
		-------------- 
*/
{
	World.frameRate = 40;
	showMobileControls(false, false, false, false);
	camera.zoom = 0.825;
	var colour = true;
	var playing = false;
	var textScale = 1;
	var textOffsetX = 0;
	var textOffsetY = 0;
	if (typeof(myFontNormal) !== "undefined") {
		textFont(myFontNormal);
		textScale = 1.35;
		textOffsetX = -1;
		textOffsetY = -5;
	} else {
		myFontNormal = "Tahoma";
	}
	var textArray;
	var suf = "";
}
/*
      -------------------
      GAME PLAY VARIABLES
      ------------------- 
*/

{
	//control variables
	var ima; //images in colour or not
	var co = ""; //suffix for power characters
	if (colour) ima = "c_";
	else ima = "";
	var kleft;
	var kright;
	var kjump;
	var kdown;
	var ksel;
	var kwdown;
	var kwup;
	var kwleft;
	var kwright;
	var kuse;
	var kjumphold;
	var pause = false;
	var willpause = false;
	var statChecking = false;
	var mMute = false; //music mute
	var sMute = false; //sound mute

	//options settings variables
	var costumes = true; //allow power ups to change skin
	var cloudShow = true; //show clouds
	var grassShow = true; //show grass
	var shakable = true; //screenshake enabled or not
	var animate = true; //do animations
	var mspd = 1; //menu navigation speed
	var fastMenu = false; //Menu navigation transitions speed
	var speedBarShow = false; //show the speed bar
	var showDirections = true; //show direction arrow guides in the main playing mode (points to boxes off screen)

	//set up tiles sprites
	var solid = createGroup();
	var tops = createGroup();
	var floors = createGroup();
	var unders = createGroup();
	var walls = createGroup();
	var bwalls = createGroup();
	var roomTilesWidth = 42;
	var roomTilesHeight = 72;
	for (var i = 0; i < roomTilesWidth; i++) { //floor
		var flooring = createSprite(24 + i * 48, 277);
		flooring.setAnimation(ima + "floor_topping");
		flooring.depth = 6;
		tops.add(flooring);
		var ground = createSprite(24 + i * 48, 325);
		ground.setAnimation(ima + "floor_piece");
		solid.add(ground);
		floors.add(ground);
		var underground = createSprite(-24 + i * 48, 397);
		underground.setAnimation(ima + "under_floor");
		solid.add(underground);
		unders.add(underground);
	}
	for (var i = 0; i < roomTilesHeight; i++) { //leftwall is pretty tall.
		var lwall = createSprite(-24, 277 - i * 48);
		lwall.setAnimation(ima + "wall_left");
		solid.add(lwall);
		walls.add(lwall);
		var behindWall = createSprite(-72, 421 - i * 48);
		behindWall.setAnimation(ima + "behind_wall");
		solid.add(behindWall);
		bwalls.add(behindWall);
	}
	var leftcorner = createSprite(-24, 325);
	leftcorner.setAnimation(ima + "corner_piece_left");
	solid.add(leftcorner);
	solid.setDepthEach(6);

	//various other sprites
	var dot = createSprite(randomNumber(470, 323.6), 100);
	dot.setAnimation(ima + "dot");
	dot.depth = 5;
	var secret = createSprite(1700, -420);
	secret.setAnimation(ima + "secret");

	//aesthetics activations
	var plants = createGroup();
	var sky = createGroup();
	var freq = 8;
	var Gplacement = randomNumber(-200, 50);
	var Gplaces = []; //the initial x coords of each patch of grass (for remembering when shaking)
	var Cplacement = randomNumber(-200, -50);
	for (var i = 0; i < freq; i++) {
		//grass patch
		var Gspacement = randomNumber(250, 400);
		Gplacement += Gspacement;
		Gplaces.push(Gplacement);
		var grass = createSprite(Gplacement, 277.5);
		grass.setAnimation(ima + "grass");
		plants.add(grass);
		if ((Gspacement > 350) && (Gspacement < 375)) { //chance for double grass patch if big enough
			var dgrass = createSprite(Gplacement + 82, 278);
			Gplaces.push(Gplacement + 82);
			dgrass.setAnimation(ima + "grass");
			plants.add(dgrass);
		}
		//clouds
		var Cspacement = randomNumber(250, 350);
		Cplacement += Cspacement;
		var cloud = createSprite(Cplacement, randomNumber(-70, -150));
		cloud.setAnimation(ima + "cloud");
		sky.add(cloud);
	}
	plants.setDepthEach(7.5);
	sky.setDepthEach(0.01);

	//gui sprites
	var lives = createGroup();
	for (var i = 0; i < 5; i++) {
		var life = createSprite(55 * i, -1000);
		life.setAnimation(ima + "life");
		life.pause();
		lives.add(life);
	}
	var boxy = createSprite(300, -1000);
	boxy.setAnimation(ima + "box_gui");
	var st = createSprite(300, -1000);
	st.setAnimation(ima + "stage_s");
	var ghp = 0; //gained hp - used for knowing when you just got hp
	var bar = createSprite(300, -200);
	bar.setAnimation(ima + "bar");
	bar.pause();

	//powerups
	var allPowers = ["tripleJump", "gigaCube", "thornArmor", "superKinetic", "quakeStun"]; //remember which index goes with which power
	var curPowers = []; //current powers (can have up to 3 items)
	var using = 0; //currently using a power (also acts as a timer)
	var timelimit = 300; //constant for the power's time limit
	var buff = "";
	var zaps = createGroup();
	var sparks = createGroup();

	//powerup gui slots
	var slots = createGroup();
	for (var i = 0; i < 3; i++) {
		var slott = createSprite(0, 0);
		slott.setAnimation("INVISIBLE");
		slott.pause();
		slots.add(slott);
	}

	//stats screen
	var statsbg = createSprite(1000, 973);
	statsbg.setAnimation(ima + "wall_paper_dirt");
	var csspd = 0; //camera for stats screen speed
	var borderbg = createSprite(1000, 805);
	borderbg.setAnimation(ima + "borderbox");
	borderbg.depth = 23;

	//pause menu sprites and variables
	var pm = createSprite(-400, 100);
	pm.setAnimation(ima + "pause_menu");
	pm.depth = 20;
	var pmspd = 0;
	var arrow = createSprite(-400, 100);
	arrow.setAnimation(ima + "selector");
	arrow.depth = 24;
	var option = 1; //which option the selector arrow lies on
	var pmoptions = ["Unpause", "Stats", "Restart", "Quit"]; //pause menu options

	//sound gui and management variables
	var once7 = 0; //for music management
	var speaker = createSprite(1000, 1000);
	speaker.setAnimation(ima + "sound");
	speaker.depth = 30;
	speaker.visible = false;
	var note = createSprite(1000, 1000);
	note.setAnimation(ima + "music");
	note.depth = 30;
	note.visible = false;

	//set up cube (player) values
	var tallbox = createSprite(600, 50);
	tallbox.setAnimation("tallbox");
	tallbox.visible = false;
	var hitbox = createSprite(600, 50);
	hitbox.setAnimation("hitbox");
	hitbox.visible = false;
	var smashbox = createSprite(600, 50);
	smashbox.setAnimation("hitbox");
	smashbox.depth = -5;
	smashbox.width = 60;
	smashbox.visible = false;
	var cube = createSprite(600, 50);
	cube.setAnimation(ima + "cube");
	cube.depth = 7;
	cube.pause();

	//player realtime variables
	var hspd = 0; //horizontal rate of change
	var vspd = 0; //vertical rate of change
	var tspd = 0; //thrust rate of change
	var trspd = 0; //right thrust rate of change
	var acspd = 0.5; //actual speed
	var downthrust = 1; //vertical fall rate
	var magn = 0; //magnitude
	var recover = 0; //recover time - when and how much
	var hp = 1000; //health pointes

	//box variables
	var boxs = createGroup(); //normal box
	var shards = createGroup(); //broken boxes
	var explos = createGroup(); //the explosions
	var savedBoxes = []; //array of saved box values. each item will be an array of position and type [x,y,type]

	//enemies
	var shooters = createGroup(); //evil eyeballs
	var tttm = 0; //time till target is moved (the shooter changes it's follow target every 200 frames)
	var xtarget;
	var bdeads = createGroup(); //dead shooters
	var bullets = createGroup();
	var hpe = 1; //shooter's hp
	var thorns = createGroup(); //thornheads
	var tspawner = 0;
	var tspawntime = 0; //the bad_cube's spawntime is a local variable
	var tdeads = createGroup(); //dead thorns
	var bads = createGroup(); //bad cubes
	var spawner = 0;
	var deads = createGroup(); //dead bad cubes
	var savedThorns = [];
	var savedBads = [];
	var savedEyes = [];

	//constants
	var grv = 0.6; //gravity
	var acc = 0.4; //accelration
	var decc = 0.4; //decceleration
	var jppwr = 16; //jump powerpower, and it will always allow you to jump up to 4 blocks
	var minspd = 1.25; //minimum speed
	var maxspd = 10; //maximum speed
	var downthrustmin = 1;
	var downthrustmax = 5;
	var thrusttm = 100; //thrust time duration

	//checking states
	var grounded = false; //used for vertical physics
	var plum = false; //checks if touching the left wall
	var lwjump = 0; //state of left wall jump side thrust (to move right)
	var once1 = true; //this is used for downthrust sound
	var once2 = true; //this is used for landing sound
	var shake = 0; //when and how long to screenshake
	var once3 = true; //used for scrrenshake
	var charge = 0; //increase power of ground smash the more the held down in air
	var lvspd = vspd; //vspd from previous frame
	var lcamy = 65; //camera y position from previous frame. This will constantly be saves, then used to recall during screenshake
	var chance = 0; //used in the chance of when stacked boxes appear
	var duchance = 0; //used in chance of when stacked bad guys appear
	var spacing = 0; //spacing of boxes used in a for loop - to recall previous spacing - that's why it can't be a local variable
	var teeth = true; //has to do with hitbox having touched the top of a box
	var once4 = false; //sound effect for unpausing
	var once5 = true; //sound effect for game over
	var djump = 0; //number of jumps in one airbounding (used for double jump)
	var stun = 0; //time duration of a stun
	var topchance = 0; //highest stack of the stage, used fr determining how high to put the eyeball
	var skin = 0; //costume number selected
	var justJumped = 0; //check if you just jumped - this is for differen jump height variations
	var justReset = false; //checks if you just reset (but doesn't apply to a skip)
	var stunning = false; //checks if you are in stunquake power and just shook the floor
	var offsetX = 0;//offset of direction director in tutroial from standard specific position

	//Game counters
	var score = 0; //actual score
	var boxes = 0; //box count (number remaining)
	var stage = 0; //the larger this number, the more difficult it gets: e.g. higher spawn rates, more boxes
	var broke = 0; //number of boxes broke
	var squash = 0; //number of enemies (any type) destroyed
	var hits = 0; //number of times hit by an enemy
	var dista = 0; //total horizontal distance traveled
	var jumps = 0; //number of jumps made
	var quake = 0; //total magnitude the ground was shook
	var resets = 0; //number of times you went too far right to reset the boxes
	var explosions = 0; //number of explosions
	var powerups = 0; //number of powerups collected
	var bonuses = 0; //number of bonuses got
	var maxht = 0; //max height achieved
	var gct = 0; //attempts to click unpause after a game over 

	//All time counters
	var highscores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //top 10 highscores
	var topstage = 0; //stage record
	var games = 0; //number of games played
	var ach = 0; //number of achievements achieved
	var totalBroke = 0; //total boxes broke
	var totalSquash = 0; //total enemies destroyed
	var totalHits = 0; //total hits
	var totalDista = 0; //total distance
	var totalJumps = 0; //total jumps
	var totalQuake = 0; //total quake rating
	var totalResets = 0; //number of resets/skips
	var totalExplosions = 0; //total explosions
	var totalPowerups = 0; //total powerups collected
	var totalBonuses = 0; //total bonuses got
	
}
/*
      -------------------
      GAME PLAY FUNCTIONS
      ------------------- 
*/

function cubePhysics() {
	var kin = ((buff == "superKinetic") ? 1.5 : 1); //movement multiplier
	//thrust dash
	if ((kdown) && (vspd == 0) && (hspd != 0)) {
		acc = 0.8 * kin;
		maxspd = 15 * kin;
	} else {
		acc = 0.4 * kin;
		maxspd = 10 * kin;
		if (acspd > maxspd) acspd -= decc * kin;
	}
	//max height checker (actually we check for min since height is less the higher up)
	if (!inTutorial) maxht = min(maxht, cube.y);
	//walljump mechanics
	//for left wall
	if ((kjump) && (plum) && (!grounded)) {
		vspd = -jppwr * kin; //apply jump
		lwjump = thrusttm; //set thrust period for duration of 30
		if (!sMute) playSound("sounds/category_swish/dry_sword_swing.mp3", false);
		if (boxes != 0) score += 0.001;
		jumps++;
		djump = 1;
	}
	if (lwjump > 0) { //during duration of thrust do the following
		lwjump--; //count down the duration of the thrust
		if (!grounded) { //check if not in the corner of wall and floor
			if (hspd < 0) acspd = minspd; //negate any acspd changes during thrust in air
			//hspd = 0;//don't allow hspd to exceed any changes to it later made
		}
		cube.x += tspd * kin; //apply thrust
	}
	if (buff == "superKinetic" && lwjump > 0) {
    hspd = -5;
  }
	if (tspd < 0) tspd = 0; //because we don't want thrust to become negative during a wall jump
	if (tspd > 0) tspd -= decc * kin; //decrease power of thrust speed
	if (grounded) lwjump = 0;
	if (trspd < 0) trspd = 0; //because we don't want thrust to become negative during a wall jump

	//ground landing, screenshaking, etc
	//screenshake when landing with thrust - magnitude depends on vspd and charge
	if ((grounded) && (once3)) { //this happens once upon ground contact
		shake = charge + 5; //set shake duration to 10 frames
		magn = (charge * 2 * (lvspd + 1) * 1.618) / 100;
		if ((kdown || buff == "gigaCube") && !sMute && grounded) playSound("sounds/ground_quake.mp3", false);
		bads.setScaleEach(0.98); //reduce size of bad cubes who experienced the shake, so if a shake continues to next level new spawns aren't stunned
		thorns.setScaleEach(0.98);
		if (themeNum == 0 || themeNum == 2) shooters.setTintEach("#f0ff00");//yellow
		else if (themeNum == 1) shooters.setTintEach("#51ff00");//neon green
		else if (themeNum == 3) shooters.setTintEach("#00fbff");//light blue
		
		for (var o = 0; o < savedBads.length; o++) {
			savedBads[o][2] = 0.98;
		}
		for (var q = 0; q < savedThorns.length; q++) {
			savedThorns[q][1] = 0.98;
		}
		if ((magn > 1 && buff == "quakeStun") && !sMute) playSound("sounds/category_collect/vibrant_game_arcade_game_electric_bubble_collect.mp3", false);
		if (buff == "quakeStun") stunning = true;
		else {
			stunning = false;
			stun = 0;
		}
		once3 = false;
	} else if (!grounded) {
		once3 = true;
		shake = 0;
	}
	//build up ground landing power chargeup
	if ((!grounded) && (kdown || buff == "gigaCube")) {
		if (buff == "gigaCube") charge += 2; //an extra charge for the double sizer
		else charge++;
	} else charge = 0;
	//screenshake
	if (shake > 0) {
		quake += 0.01;
		shake--;
		magn = magn / 1.05;
		if (shakable) camera.y = randomNumber(lcamy, lcamy - magn);
		if (stunning && magn > 1) {
			stun = 85;
			if (magn > 1 && shake % 2 == 0 && animate) { //create visual zap dots fly upwards from the ground
				for (var i = 0; i < 21; i++) {
					var zap = createSprite(-400 + camera.x + i * randomNumber(48, 50), 330);
					zap.setAnimation(ima + "stun" + suf);
					zap.depth = -1;
					zaps.add(zap);
					zap.velocityY = -40;
					zap.lifetime = 16;
				}
			}
		}
	} else {
		if (grounded) camera.y = lcamy; //this is only meant for right after the last frame of a screenshake, but it doesn't interfere otherwise
		lcamy = camera.y;
	}
	if (stun > 0) { //diminish stun count and visual
		stun--;
	} else {
		sparks.destroyEach();
		stunning = false;
	}
	//horizontal movement
	var move = (kright - kleft) * (kin/1.25); //if it's both or niether, move = 0. if it's left, than it's -1, if right, than it's 1.
	if ((cube.x - 4 < lwall.x + lwall.width) && (move == -1)) move = 0;
	if (move != 0) hspd = move * acspd; //multiply by current speed to get actual speed (hspd is always equal to either -acspd, 0 or acpsd.)
	//when touched left wall
	var thicc = 0;
	if (buff == "gigaCube") thicc = 22;
	if (cube.x + hspd < lwall.x + lwall.width + thicc) { //detect if about to hit wall, to stop movement
		hspd = 0;
		cube.x = lwall.x + lwall.width + 1 + thicc;
		acspd = minspd;
	}
	if (cube.x - (cube.width / 3) < lwall.x + lwall.width) { //detect if able to make a walljump - therefore this must be detected based on displacement
		plum = true; //allow walljump
		tspd = maxspd * kin; //get the thrust speed ready
	} else plum = false;
	cube.x += hspd; //apply movements
	if ((acspd < maxspd * kin) && (move != 0)) {
		if (acspd < 2) {
	    if (kdown && grounded) {
	      acspd += acc * 12;//accelerate more when you are slower, but in quake form
	    } else {
	      acspd += acc * 8;//accelerate more when you are slower
	    }
	  } else if (acspd < 5) {
	    if (kdown && grounded) {
	      acspd += acc * 4;//accelerate more when you are slower, but in quake form
	    } else {
	      acspd += acc * 2;//accelerate more when you are slower
	    }
	  } else {
		  acspd += acc; //acceleration
	  }
	} else if (move === 0) {
		acspd = minspd; //set actual speed to 0 to negate the gained acceleration
		if (hspd > 0) hspd -= decc * kin; //deccelerate if going right
		if (hspd < 0) hspd += decc * kin; //deccelerate if going left
		if ((abs(hspd) < decc * kin) && (vspd == 0)) hspd = 0; //eliminate remaning excess hspd value (sometimes there will be 0.2 left for example)
	}
	if (move === 0) stopSound("sounds/category_board_games/card_fan_2.mp3");
	if (hspd != 0) dista += abs(hspd);

	//vertical movement
	if (kdown) { //when holding down key
		var downBoost = (buff != "superKinetic" ? 1 : 3);
		downthrust = downthrustmax * downBoost; //apply downthrust
		if (once1) {
			if (!sMute) playSound("sounds/category_swish/deep_swish_2.mp3", false);
			once1 = false;
		}
		if (true) { //what? what was I thinking when I coded this?
			cube.setAnimation(ima + "cube_squish" + co);
		} else cube.setAnimation(ima + "cube" + co);
		
		cube.setCollider("rectangle", 0, 6, 60, 36);
		if (buff != "gigaCube") {
		  cube.setCollider("rectangle", 0, 8, 60, 36);
		} else {
		  cube.setCollider("rectangle", 0, 12, 120, 72);
		}
	} else {
		once1 = true;
		downthrust = downthrustmin; //reset downthrust
		if (plum && vspd > 0) downthrust = downthrustmin / 2; //slide slower down walls
		if (co != "_stunned") {
		  cube.setAnimation(ima + "cube" + co);
		} else {
		  cube.setAnimation(ima + "cube" + "_stun");
		}
		if (buff != "gigaCube") {
		  cube.setCollider("rectangle", 0, 0, 48, 48);
		} else {
		  cube.setCollider("rectangle", 0, 0, 96, 96);
		}
	}
	if ((!grounded) && (teeth)) vspd += grv * downthrust; //apply gravity effects when in air
	lvspd = vspd * kin; //record latest vspd
	if (cube.y + vspd * kin / 3.2 > (ground.y - ground.height - (thicc * 0.8))) { //detect when cube hits the floor
		if (teeth) vspd = 0; //stop moving downwards
		grounded = true; //stop applying gravity, so vspd won't change again after we just changed it to 0 
	} else grounded = false;
	if ((cube.y + 25) > (ground.y - ground.height)) {
		grounded = true; //in case the cube is a little bit above ground, to prevent switching back and forth between true and false
	}
	if (!teeth) djump = 0; //reset jumps on box landing

	//jumping
	if (justJumped == 1) justJumped = 2;
	if ((kjump) && (grounded)) {
		vspd = -jppwr * kin; //applying jumping input
		if (!sMute) playSound("sounds/category_swish/fast_swish.mp3", false);
		if (boxes != 0) score += 0.001;
		jumps++;
		djump++;
		justJumped = 1;
	}
	if (kjump && (buff == "tripleJump") && !plum && (djump > 0) && !grounded) { //double jump only up to twice when normal jump was already enacted
		vspd = -jppwr; //applying jumping input
		if (!sMute) playSound("sounds/category_swish/fast_swish.mp3", false);
		if (boxes != 0) score += 0.001;
		jumps++;
		justJumped = 1;
		if (djump == 1) djump++;
		else djump = 0;
	}
	if (justJumped == 2 && vspd < 0 && !kjumphold) { //if you're moving up in a jump and you're not still holding on (this will only have a effect a frame after you pressed up)
		if (buff != "superKinetic") vspd = max(vspd, -jppwr / 2);
		else vspd = min(max(vspd, -jppwr / 1.5), -5);
		justJumped = 0;
	}
	cube.y += vspd; //applying vertical movements
	if (vspd > 70) {
	  vspd = 70;
	}
	
	//landing on the ground
	if (grounded) {
		if (once2) {
			if (!sMute) playSound("sounds/category_hits/8bit_splat.mp3", false);
			if (djump == 1) djump = 0;
			once2 = false;
		}
	} else once2 = true;
	//if you went too low under ground
	if (cube.y >= 277 - (thicc * 1.05)) {
	  cube.y = 277 - thicc * 1.05;
	}
	//this fixes floating in the air if your gigacube power ran out while grounded (nothing updated it to know it isn't grounded)
	if (grounded && thicc == 0 && cube.y < 277 && vspd == 0) cube.y = 277;

	//recovering
	if (recover >= 58) { //when you just got hit and recover time is at it's max - turn white - but only 3 frames
		cube.setFrame(1);
	} else cube.setFrame(0);
	if (recover > 0) {
		recover--;
		if (recover % 4 == 0) {
			cube.visible = false;
		} else {
			cube.visible = true;
		}
	} else {
		cube.visible = true;
	}
	if (stageRecover > 0) {
		stageRecover--;
	}
}

function playingStages() {
	if (animate) dot.play();
	else dot.pause();
	if (cube.isTouching(dot)) { //check if touched dot
		if (!justReset) {
			if (stage != 0) score += 10 + 1.25 * stage;
			//gain hp at start of stage
			if (hp >= 800) {
				hp = min(hp + 25, 1000);
			} else if (hp >= 600) {
				hp = min(hp + 50, 825);
			} else if (hp >= 400) {
				hp = min(hp + 100, 650);
			} else if (hp >= 300) {
				hp += 100;
			} else {
				hp = 400;
			}
			ghp = 2.5;
			stageRecover = 40;
			flashRecov = false;
			rustickCount = 0;
		} else justReset = false;
		//dot pop
		if (animate) {
			var dpop = createSprite(dot.x, dot.y);
			if (colour) dpop.setAnimation("c_dot_pop" + suf);
			else dpop.setAnimation("pop");
			dpop.Depth = 0;
			dpop.lifetime = 7;
		}
		//set dot location
		dot.y = 500; //go underneath, out of view, until all boxes are broken
		dot.x = randomNumber(62.83, 800); //immediately teleport the dot somewhere else in the room, but in a range depending on how many boxes will form to the right of it
		if (min(Math.floor(stage / 5) + 1, 10) > 4) dot.x = randomNumber(62.83, 500);
		if (min(Math.floor(stage / 5) + 1, 10) > 6) dot.x = randomNumber(62.83, 200);
		if (min(Math.floor(stage / 5) + 1, 10) > 8) dot.x = randomNumber(62.83, 100);
		//hey! it's [pi time 20], and the next number is [pi times 20] to the power of 1.618
		stage++; //add to the stage
		if (stage == 100) achUnlock(42);
		if (!sMute) playSound("sounds/category_notifications/vibrant_game_modern_retro_touch_item_1.mp3", false);
		if (!sMute) playSound("sounds/category_collect/retro_game_coin_pickup_8.mp3", false);
		boxes = min(floor(stage / 5) + 1, 10); //initial number of stacks
		//bad_cube set up 
		for (var k = 0; k < (floor(stage / 5) + 1); k++) {
			if (bads.length + savedBads.length < 9) { //only spawn more if there are less 8
				var side = (randomNumber(0, 1) * 2) - 1; //side of room (past boxes or near wall)
				var bad = createSprite(dot.x - side * (100 * k), 272);
				bad.setAnimation(ima + "bad_cube" + suf);
				bads.add(bad);
				bad.pause();
			}
		}
		//set up box stacks
		topchance = 0;
		boxSetUp(dot.x, stage, true, true, true, true, true);
		topchance++;

		//shooters set up
		if (stage >= 10) {
			if (shooters.length < 1) {
				var eye = createSprite(max(camera.x + randomNumber(-200, min(stage * 20, 1500)), 50), max(-topchance * 30, -130) + randomNumber(15, 40));
				eye.setAnimation(ima + "eye" + suf);
				shooters.add(eye);
				eye.pause();
				shooters.setDepthEach(11);
				hpe = min(max((floor(stage / 10)), 1), 3);
			}
		}
	}
	if (boxes == 0) {
		//if (dot.y > 200 && !sMute) playSound("sounds/Subtle-pop.mp3",false);
		dot.y = 100 + 3 * sin(5 * sinCounter); //hovering;
	}
}

function boxSetUp(x, flux, bonusy, boomy, buffy, spicy, badsy) {
	var spawnNum = boxes; //spawn the original amount of boxes - negate the extras, if not for this line of code, the boxes = boxes + chance line would cause the game to enter a forever loop - bad.
	for (var i = 0; i < spawnNum; i++) {
		spacing = x + 150 * (i - 1) + randomNumber(125, 200);
		if (spacing < 100) {
			spacing = 100;
		}
		var box = createSprite(spacing, 272);
		var spicyness = randomNumber(1, 1250); //a chance for a spicy suprise...XD
		if (spicyness == 1 && flux > 10 && spicy) {
			box.setAnimation(ima + "Mr. habanero" + suf);
			box.type = "pepper";
		} else {
			box.setAnimation(ima + "box" + suf);
			box.type = "normal";
		}
		box.pause();
		boxs.add(box);
		var extras = min(floor(flux / 10) + 3, randomNumber(6, 7)); //number of max extra layers possible - maximum max is 8
		if (flux <= 5) extras = 2; //before level 6, you can't have more than 3 layers
		chance = randomNumber(0, extras); //chances of a stacked box tower;
		if (chance > 0) { //so that the for loop will not run when chance is 0 - when it's a one box stack
			for (var j = 0; j < chance; j++) {
				var extbox = createSprite(spacing, 224 - 48 * j);
				var loot = randomNumber(1, max((25 - (floor(flux / 15))), 20)); //chance to spawn loot (health and more point giving gold box)
				if (flux >= 40) {
					loot = randomNumber(1, min((25 + floor((flux) * 0.2)), 75));
				}
				if (loot <= 2 && bonusy) {
					extbox.setAnimation(ima + "box_mystery" + suf);
					extbox.type = "bonus";
				} else if (stage > 5 && ((loot == 3) || (((loot == 3) || (loot == 4)) && (flux >= 20))) && boomy) {
					extbox.setAnimation(ima + "box_boom" + suf);
					extbox.type = "boom";
				} else if (stage > 5 && ((loot == 5) || (((loot == 5) || (loot == 6)) && (flux >= 20))) && buffy) {
					extbox.setAnimation(ima + "box_buff" + suf);
					extbox.type = "buff";
				} else {
					extbox.setAnimation(ima + "box" + suf);
					extbox.type = "normal";
				}
				extbox.pause();
				boxs.add(extbox);
			}
		}
		topchance = max(chance, topchance);
		boxes = boxes + chance; //update the box count after the extra chance stacked ones appear.
	}
	boxs.setDepthEach(0.02);
	//there is a chance to spawn in a stack of badcubes at about 2/3 the stages' max box height
	//these stacks ignore population control
	var shonce = randomNumber(1, 10 + floor(flux / 5)); //every 5 levels there's a higher chance to spawn 2 stacks
	if (inTutorial && lesson == 15) shonce = 5;
	if (shonce >= 5 && badsy) { //if 8, 9 or 10 or more (the more the stages the more likely, spawn the first bad stack
		var bad = createSprite(cube.x + spacing + 200, 272);
		bad.setAnimation(ima + "bad_cube" + suf);
		bads.add(bad);
		bad.pause();
		var bextras = min(round(2 * (floor(flux / 10) + 3) / 3), 4);
		if (flux < 6) bextras = 1;
		duchance = randomNumber(0, bextras); //chances of a stacked box tower;
		if (bads.length + savedBads.length + duchance > 20) {//if duchance will exceed spawn limit
			duchance = max(20 - (bads.length + savedBads.length), 0);
		}
		if (duchance > 0) { //so that the for loop will not run when chance is 0
			for (var g = 0; g < duchance; g++) {
				var extbad = createSprite(cube.x + spacing + 200, 224 - 48 * g);
				extbad.setAnimation(ima + "bad_cube" + suf);
				extbad.pause();
				bads.add(extbad);
			}
		}
	}
	if (shonce > 10 && badsy) { //spawn the second stack (only could happen past stage 5)
		var secbad = createSprite(cube.x + spacing + 500, 273);
		secbad.setAnimation(ima + "bad_cube" + suf);
		bads.add(secbad);
		var bbextras = min(round(2 * (floor(flux / 10) + 3) / 3), 3);
		if (flux < 6) bbextras = 1;
		duchance = randomNumber(0, bbextras); //chances of a stacked box tower;
		if (bads.length + savedBads.length + duchance > 20) {//if duchance will exceed spawn limit
			duchance = max(20 - (bads.length + savedBads.length), 0);
		}
		if (duchance > 0) { //so that the for loop will not run when chance is 0
			for (var f = 0; f < duchance; f++) {
				var secextbad = createSprite(cube.x + spacing + 500, 224 - 48 * f);
				secextbad.setAnimation(ima + "bad_cube" + suf);
				secextbad.pause();
				bads.add(secextbad);
			}
		}
	}
}

function boxPhysics() {
  var kin = ((buff == "superKinetic") ? 1.5 : 1); //movement multiplier
	boxs.setDepthEach(0.02);
	//hitbox following underneath and ahead. 
	//This is essential for collisions: a "future" hitbox ahead of the player (basically where the player will be next frame)
	hitbox.x = cube.x + hspd;
	hitbox.y = cube.y + vspd;
	smashbox.x = cube.x + hspd;
	smashbox.y = cube.y + vspd;
	if (kdown && !grounded) {
		if (buff == "superKinetic" || vspd > 55) {
		  smashbox.height += vspd * 2;
		  if (hspd != 0) {
		    smashbox.width = 65;
		  }
		} else {
		  smashbox.height += vspd / 3;
		  smashbox.width = 60;
		}
	} else {
	  smashbox.height = 48;
	  smashbox.width = 60;
	}
	//tallbox following. Used when hitbox is in exacts ame y position as the cube, and when need to check if it's still above a box
	tallbox.x = cube.x + hspd;
	tallbox.y = cube.y + vspd;
	//adjust to tspd for when walljump is done
	if (lwjump > 0) {
	   hitbox.x += tspd * kin;
	   smashbox.x += tspd * kin;
	   tallbox.x += tspd * kin;
	}
	//player interactions by movement
	//respawn saved boxes that were save away then destroyed
	for (var q = 0; q < savedBoxes.length; q++) {
		if (abs(camera.x - savedBoxes[q][0]) <= 350) {
			var newBox = createSprite(savedBoxes[q][0], savedBoxes[q][1]);
			newBox.type = savedBoxes[q][2];
			switch (newBox.type) {
				case "bonus":
					newBox.setAnimation(ima + "box_mystery" + suf);
					break;
				case "boom":
					newBox.setAnimation(ima + "box_boom" + suf);
					break;
				case "buff":
					newBox.setAnimation(ima + "box_buff" + suf);
					break;
				case "pepper":
					newBox.setAnimation(ima + "Mr. habanero" + suf);
					break;
				default:
					newBox.setAnimation(ima + "box" + suf);
					break;
			}
			newBox.pause();
			boxs.add(newBox);
			savedBoxes.splice(q, 1);
		}
	}
	//breaking mechanics
	if (boxs.length > 0) {
		for (var i = 0; i < boxs.length; i++) {
			var cbox = boxs.get(i); //the current box we're dealing with
			//destroy box and save it's data if out of view - lag prevention
			if (abs(camera.x - cbox.x) > 350) {
				savedBoxes.push([cbox.x, cbox.y, cbox.type]);
				cbox.destroy();
			}
			//box smashing
			if (cbox.x > cube.x - 100 - hspd && cbox.x < cube.x + 100 + hspd) {
				if (((kdown) && (vspd > 0) && (smashbox.isTouching(cbox) || cube.isTouching(cbox)) && ((cube.y < cbox.y - cbox.height / 2) || buff == "superKinetic")) || (cube.isTouching(cbox) && buff == "gigaCube")) {
					//if it's a mystery box, do these lines of code also: (must be done before box is destroyed)
					if (cbox.type == "bonus") {
						var luck = 25 * randomNumber(1, 4);
						hp += luck;
						score += luck;
						bonuses++;
						ghp = 2;
						if (!sMute) playSound("sounds/category_collect/retro_game_health_pickup_2.mp3", false);
					} else if (cbox.type == "boom") {
						score += 30;
						explosions++;
						if (!sMute) playSound("sounds/blast.mp3");
						if (!sMute) playSound("sounds/category_hits/puzzle_game_button_02.mp3");
						var kaboom = createSprite(cbox.x, cbox.y);
						kaboom.setAnimation(ima + "explosion" + suf);
						if (!animate) kaboom.pause();
						explos.add(kaboom);
						kaboom.lifetime = 8;
					} else if (cbox.type == "buff") {
						score += 30;
						powerups++;
						if (!sMute) playSound("sounds/category_puzzle/puzzle_game_powerup_light_04.mp3", false);
						if (!sMute) playSound("sounds/category_pop/puzzle_game_ui_bubble_04.mp3", false);
						//choose power randomly
						var chosenPower = randomNumber(0, 4);
						if (curPowers.length < 3) curPowers.push(allPowers[chosenPower]);
					}
					if (cbox.type == "pepper") { //a spicy suprise box...? 
						score += 1000;
						hp = 1000;
						bonuses++;
						ghp = 2;
						powerups++;
						if (!sMute) playSound("sounds/category_puzzle/puzzle_game_powerup_light_04.mp3", false);
						if (!sMute) playSound("sounds/category_pop/puzzle_game_ui_bubble_04.mp3", false);
						//choose power randomly
						var chosenPower2 = randomNumber(0, 4);
						if (curPowers.length < 3) curPowers.push(allPowers[chosenPower2]);
						explosions++;
						if (!sMute) playSound("sounds/blast.mp3");
						if (!sMute) playSound("sounds/category_hits/puzzle_game_button_02.mp3");
						var kaboom2 = createSprite(cbox.x, cbox.y);
						kaboom2.setAnimation(ima + "explosion" + suf);
						if (!animate) kaboom2.pause();
						explos.add(kaboom2);
						kaboom2.lifetime = 8;
						achUnlock(41);
					}
					//normal breaking function
					if (animate) {
						var broken = createSprite(cbox.x, cbox.y);
						broken.setAnimation(ima + "box" + suf);
						if (cbox.type == "bonus") broken.setAnimation(ima + "box_mystery" + suf);
						if (cbox.type == "boom") broken.setAnimation(ima + "box_boom" + suf);
						if (cbox.type == "pepper") broken.setAnimation(ima + "box_boom" + suf);
						if (cbox.type == "buff") broken.setAnimation(ima + "box_buff" + suf);
						shards.add(broken);
						shards.setDepthEach(1);
						broken.lifetime = 5;
					}
					cbox.destroy();
					if (!sMute) playSound("sounds/category_hits/retro_game_simple_impact_2.mp3", false);
					boxes--;
					score += 5;
					broke++;
					if (thornsTotal != 0) rustickCount = 0;
				}
				//vertical interaction
				if (hitbox.isTouching(cbox) && (vspd > 0) && (cube.y - vspd / 3.5 < cbox.y - cbox.height)) { //detect if about to hit wall from top, to stop movement
					vspd = 0;
					cube.y = cbox.y - cbox.height;
					grounded = true;
					teeth = false;
				} else if ((teeth) && ((cube.x > cbox.x + cbox.width - 2) || (cube.x < cbox.x - cbox.width + 2))) {
					//horizontal interaction
					if (hitbox.isTouching(cbox) && (hspd < 0 || (tspd < 0 && lwjump > 0)) && (cube.x > cbox.x)) { //detect if about to hit wall from left side, to stop movement
						hspd = 0;
						tspd = 0;
						lwjump = 0;
						cube.x = cbox.x + cbox.width;
						acspd = minspd;
					}
					if (hitbox.isTouching(cbox) && (hspd > 0 || (tspd > 0 && lwjump > 0)) && (cube.x < cbox.x)) { //detect if about to hit wall from right side, to stop movement
						hspd = 0;
						tspd = 0;
						lwjump = 0;
						cube.x = cbox.x - cbox.width;
						acspd = minspd;
					}
				}
				//jumping off the top of a box
				if ((kjump) && (!teeth)) {
					if (buff == "superKinetic") vspd += -jppwr * 1.5;
					else vspd += -jppwr;
					if (!sMute) playSound("sounds/category_swish/fast_swish.mp3", false);
					cube.y += vspd;
					teeth = true;
					score += 0.5;
					jumps++;
					djump++;
					justJumped = 1;
				}
				if ((!teeth) && (!tallbox.isTouching(boxs))) {
					//update the cube, so now it knows its hovering and must now fall
					//vspd += grv;
					grounded = false;
					teeth = true;
				}
			}
		}
	}
	//hitbox.visible = true;
	//smashbox.visible = true;
	//tallbox.visible = true;
}

function baddiesPhysics() {
	bads.setDepthEach(0.5);
	bads.setColliderEach("rectangle",0,0,48,48);
	for (var q = 0; q < savedBads.length; q++) {
		if (abs(camera.x - savedBads[q][0]) <= 350) {
			var newBad = createSprite(savedBads[q][0], savedBads[q][1]);
			newBad.setAnimation(ima + "bad_cube" + suf);
			newBad.pause();
			newBad.scale = savedBads[q][2];
			if (newBad.scale == 0.98 && stun > 0) {
				newBad.setFrame(1);
			} else {
				newBad.scale = 1;
			}
			bads.add(newBad);
			savedBads.splice(q, 1);
		} else {
			var badIsMobile = true;
			if (savedBoxes.length > 0) {
				for (var t = 0; t < savedBoxes.length; t++) {
					//check all saved boxes to see if it's inside of them, to prevent movement
					if ((savedBads[q][0] < savedBoxes[t][0] + 24 && savedBads[q][0] > savedBoxes[t][0] - 24) && (savedBads[q][1] < savedBoxes[t][1] + 24 && savedBads[q][1] > savedBoxes[t][1] - 24)) {
						//if a bad cube saved location is inside the x position of a box saved x location 
						badIsMobile = false;
						break;
					}
				}
			}
			if (savedBads[q][2] == 0.98 && stun > 0) {
				badIsMobile = false;
			}
			if (badIsMobile) {
				if (savedBads[q][0] > cube.x) {
					savedBads[q][0] += (-1 / acspd * 7.5) - 1;
				} else if (savedBads[q][0] < cube.x) {
					savedBads[q][0] += (1 / acspd * 7.5) + 1;
				}
			}
		}
	}
	for (var i = 0; i < bads.length; i++) {
		var baddy = bads.get(i);
		//save bads that go off screen
		if (abs(camera.x - baddy.x) > 400) {
			savedBads.push([baddy.x, baddy.y, baddy.scale]);
			baddy.destroy();
		}
		//movement
		var rangeMag = 1;
		if (baddy.velocityX == 0) rangeMag = 1; //this fixes a bug that if they were stuck behind a box which you then broke, the wouldn't move until you did, even though they could reach you
		else rangeMag = 1.5;
		
		if ((baddy.x > cube.x - cube.width * rangeMag) && (baddy.x < cube.x + cube.width * rangeMag)) {
			//nothing
		} else if (!baddy.isTouching(cube)) {
			if (baddy.x > cube.x) baddy.velocityX = (-1 / acspd * 7.5) - 1; //so the less you move, the faster they approach you
			if (baddy.x < cube.x) baddy.velocityX = (1 / acspd * 7.5) + 1;
		}
		if (abs(camera.x - baddy.x) > 325 && abs(camera.x - baddy.x) < 400) {
			for (var w = 0; w < savedBoxes.length; w++) {
				//check all saved boxes to see if it's inside of them, to prevent movement
				if ((baddy.x < savedBoxes[w][0] + 24 && baddy.x > savedBoxes[w][0] - 24) && (baddy.y < savedBoxes[w][1] + 24 && baddy.y > savedBoxes[w][1] - 24)) {
					//if a bad cube location is inside the x position of a box saved x location 
					movable = false;
					baddy.velocityX = 0;
					break;
				}
			}	
		}
		
		if (baddy.x < 25 && baddy.bounciness == 0) { //going too far left
			baddy.bounciness = 1;
			baddy.velocityX = 7.5;
			if (animate) {
				var dig = createSprite(baddy.x, baddy.y);
				dig.setAnimation(ima + "dig" + suf);
				dig.lifetime = 7;
				dig.depth = 70;
			}
		} else baddy.bounciness = 0;
		
		//stunned
		if (stun > 0 && (baddy.scale == 0.98)) {
			baddy.setFrame(1);
			baddy.velocityX = 0;
		} else {
			baddy.setFrame(0);
			baddy.scale = 1;
			//collisions
			if (baddy.collide(bads) || baddy.isTouching(bads)) {
				baddy.y -= 5;
			} else if (baddy.y < 260) {
				baddy.y += 0.25 * sin(10 * sinCounter);
				baddy.displace(bads);
			}
		}
		baddy.collide(bads);
		baddy.collide(boxs);
		baddy.collide(ground);
		
		//destroying the bad cubes
		if (((cube.y - 12 * (1 + floor(vspd / 30) * 3) < baddy.y) && (kdown || buff == "gigaCube") && (vspd > 0) && lesson != 17) || baddy.isTouching(explos)) {
			if (baddy.collide(cube) || baddy.isTouching(explos)) {
				if (!baddy.isTouching(explos)) {
					score += 5;
					squash++;
					badsTotal++;
				}
				//create death animation
				baddy.destroy();
				if (animate) {
					var dead = createSprite(baddy.x, baddy.y);
					dead.setAnimation(ima + "bad_cube_dead" + suf);
					deads.add(dead);
					deads.setDepthEach(1);
					dead.lifetime = 5;
				}
				if (!sMute) playSound("sounds/category_puzzle/puzzle_game_collapse_chatter_02.mp3", false);
			}
			//but if they touch you...
		} else if (baddy.isTouching(cube)) {
			if (buff == "thornArmor" || buff == "gigaCube") {
				if (buff == "thornArmor") {
					hurt(25, 60, "sounds/category_explosion/vibrant_game_ball_touch_1.mp3");
				} else {
					hurt(100, 60, "sounds/category_explosion/vibrant_game_ball_touch_1.mp3");
				}
				if (!baddy.isTouching(explos)) {
					score += 5;
					squash++;
					badsTotal++;
				}
				baddy.destroy();
				if (animate) {
					var deady = createSprite(baddy.x, baddy.y);
					deady.setAnimation(ima + "bad_cube_dead" + suf);
					deads.add(deady);
					deads.setDepthEach(1);
					deady.lifetime = 5;
				}
				if (!sMute) playSound("sounds/category_puzzle/puzzle_game_collapse_chatter_02.mp3", false);
			} else hurt(100, 60, "sounds/category_explosion/vibrant_game_ball_touch_1.mp3");
		}
		//if they go under ground (happens when they spawn inside a box). This will also be the lucky chance when one less baddy appears!
		if (baddy.y > 272) {//reposition if went underground
			baddy.y = 272;
		}
		if (baddy.y < -375) {//destroy when it ets too high
			if (animate) {
				var dead2 = createSprite(baddy.x, baddy.y);
				dead2.setAnimation(ima + "bad_cube_dead" + suf);
				deads.add(dead2);
				deads.setDepthEach(1);
				dead2.lifetime = 5;
			}
			baddy.destroy();
		}
	}
}

function thornMechanics() {
	var digCycle = 100 + min(floor(stage / 10) * 5, 50);
	var aboveTime = 50 - min(floor(stage / 10), 25);
	//respawn saved boxes that were save away then destroyed
	for (var q = 0; q < savedThorns.length; q++) {
		if (abs(camera.x - savedThorns[q][0]) <= 350) {
			var newThorn = createSprite(savedThorns[q][0], 296);
			newThorn.setAnimation(ima + "tri" + suf);
			newThorn.pause();
			newThorn.depth = 1.1;
			newThorn.scale = savedThorns[q][1];
			if (newThorn.scale == 0.98 && stun > 0) {
				newThorn.y = 272;
				newThorn.setFrame(1);
				newThorn.bounciness = 0;
			} else {
				newThorn.scale = 1;	
				newThorn.bounciness = aboveTime;
			}
			thorns.add(newThorn);
			savedThorns.splice(q, 1);
		}
	}
	for (var i = 0; i < thorns.length; i++) {
		var ithorn = thorns.get(i);
		if (abs(camera.x - ithorn.x) > 350) {
			savedThorns.push([ithorn.x,ithorn.scale]);
			ithorn.destroy();
		}
		//moving out of way for boxes
		if (ithorn.isTouching(boxs)) {
			ithorn.velocityX = 10; //escape to the right
			ithorn.bounciness = 0;
			ithorn.y = 272;
		} else {
			ithorn.collide(boxs);
			//go in and out of ground
			if (ithorn.bounciness < digCycle) ithorn.bounciness++; //bounciness is being used as a counter for it's digging cycle
			else ithorn.bounciness = 0;
			if (ithorn.bounciness > aboveTime - 5 && ithorn.bounciness < aboveTime) {
				ithorn.y += 6;
			}
			if (ithorn.bounciness > digCycle - 5 && ithorn.bounciness < digCycle) {
				ithorn.y -= 6;
			}
			if (ithorn.y < 272) ithorn.y = 272;
			
			//indicate a warning when about to go in/out
			if (typeof(ithorn.atint) == "undefined") ithorn.atint = 255;
			if (animate && ((ithorn.bounciness > aboveTime - 15 && ithorn.bounciness < aboveTime - 5) || (ithorn.bounciness > digCycle - 15 && ithorn.bounciness < digCycle - 5))) {
				if (ithorn.atint > 50) {
				  ithorn.atint -= 50;
				}
			} else if (animate && (ithorn.bounciness < aboveTime - 15 || (ithorn.bounciness > aboveTime && ithorn.bounciness < digCycle - 15))) {
				if (ithorn.atint < 255) {
				  ithorn.atint += 150;
				}
				if (ithorn.atint > 255) {
				  ithorn.atint = 255;
				}
			}
			if (ithorn.atint < 255) {
			  //shake back and forth in an unrandom way (uses sign toggling to fluctuate back and forth)
			  ithorn.rotation = -1.5 * (ithorn.rotation/abs(ithorn.rotation)) * ((255 - ithorn.atint) / 75);
			} else {
			  ithorn.rotation = 0.01;
			}
			
		}
		if (ithorn.velocityX > 0) ithorn.velocityX -= 1;
		else ithorn.velocityX = 0;
		ithorn.displace(thorns);
		if (stun > 0 && (ithorn.scale == 0.98)) {//if it experienced the pound, it will become 0.98
			ithorn.setFrame(1);
			ithorn.bounciness = 0;
			if (ithorn.y > 272) ithorn.y -= 6;
			else if (ithorn.y < 272) ithorn.y = 272;
		} else {
			ithorn.setFrame(0);
			ithorn.scale = 1;
		}
		//hurting/getting killed - interactions with player
		if (ithorn.y > 296) ithorn.destroy(); //if it goes to deep by mistake, well, you're lucky, this is rare, but must be regulated.
		if (((ithorn.y == 272) && (kdown) && (vspd == 0) && (acspd > 5) && cube.isTouching(ithorn)) || ithorn.isTouching(explos)) { //you must hit  it from the side whilst moving in crouch position
			ithorn.destroy();
			killedaThorn = true;
			if (thornsTotal == 0 && thorns.length > 0 && rustickCount >= 100) rustickCount = 0;
			if (!ithorn.isTouching(explos)) {
				score += 10;
				squash++;
				thornsTotal++;
			}
			if (animate) {
				var tdead = createSprite(ithorn.x, ithorn.y); //destoring animation sprite
				tdead.setAnimation(ima + "tri_dead" + suf);
				tdeads.add(tdead);
				tdeads.setDepthEach(1.1);
				tdead.lifetime = 5;
			}
			if (!sMute) playSound("sounds/category_puzzle/puzzle_game_collapse_chatter_02.mp3", false);
		} else if (cube.isTouching(ithorn)) { //powers allow instant destroy
			if (buff == "thornArmor" || buff == "gigaCube") {
				if (buff == "thornArmor" && ithorn.y != 272) hurt(25, 60, "sounds/category_accent/puzzle_game_accent_bubble_05.mp3");
				else if (ithorn != 272) hurt(100, 60, "sounds/category_accent/puzzle_game_accent_bubble_05.mp3");
				if (!ithorn.isTouching(explos)) {
					score += 10;
					squash++;
					thornsTotal++;
				}
				ithorn.destroy();
				if (animate) {
					var deadt = createSprite(ithorn.x, ithorn.y);
					deadt.setAnimation(ima + "tri_dead" + suf);
					tdeads.add(deadt);
					tdeads.setDepthEach(1.1);
					deadt.lifetime = 5;
				}
				if (!sMute) playSound("sounds/category_puzzle/puzzle_game_collapse_chatter_02.mp3", false);
			} else if (((acspd < 2 && grounded == true) || (grounded == false) || (ithorn.y != 272)) && ((buff != "thornArmor" || buff != "gigaCube"))) hurt(100, 60, "sounds/category_accent/puzzle_game_accent_bubble_05.mp3");
		}
	}
}

function shootersPhysics() {
	//eye
	for (var i = 0; i < shooters.length; i++) {
		var ball = shooters.get(i);
	if (stun > 0 && (ball.tint == "#f0ff00" || ball.tint == "#f6f6f6" || ball.tint == "#51ff00" || ball.tint == "#00fbff")) {
			if (!colour) ball.tint = "#f6f6f6";
			tttm = max((160 - floor(stage / 5) * 10), 100);
			ball.setFrame(0);
		} else {
			if (ball.tint != "rgb(255,255,255)") {
				ball.tint = "rgb(255,255,255)";
			}
			ball.y += 0.75 * sin(5 * sinCounter); //hovering
			if (tttm > 0) {
				tttm--;
			} else {
				tttm = max((160 - floor(stage / 5) * 10), 100);
				xtarget = randomNumber(-200, 200); //change target
			}
			//follow targeted point
			if (ball.x > camera.x + xtarget) ball.x -= max(abs(hspd / 2), 2);
			if (ball.x < camera.x + xtarget) ball.x += max(abs(hspd / 2), 2);
			//shoot fireballs counter
			var interval = max(8, (floor(60 / (max(floor(stage / 10), 1)))));
			if (inTutorial && (lesson == 14 || lesson == 15)) interval = 20;
			if (interval < 5) interval = 5;
			if (animate) {
				if ((tttm > 75) && (tttm < 81)) ball.nextFrame(); //phase into redness(start to halfway through frames)
				if ((tttm > 14) && (tttm < 20)) ball.nextFrame(); //phase out of redness(from halfway through frames to start)
			}
			//shoot fireballs
			if ((tttm % interval == 0) && (tttm >= 20) && (tttm <= 60)) {
				var fire = createSprite(ball.x, ball.y);
				fire.setAnimation(ima + "particle" + suf);
				fire.depth = 10.5;
				fire.lifetime = 250;
				//set direction and speed
				fire.pointTo(cube.x + randomNumber(-3, 3), cube.y + randomNumber(-1.55, 1.55));
				fire.rotation += randomNumber(-8, 8); //aim is not perfect
				fire.setSpeedAndDirection(min(max(12, stage * 0.6), 17), fire.rotation);
				
				bullets.add(fire);
				if (!sMute) playSound("sounds/category_swish/weapon_swing_2.mp3", false);
				if (!sMute) playSound("sounds/category_projectile/retro_game_weapon_-slinky_laser_3.mp3", false);
			}
		}
		//evil eyeball shooter death sequence
		//lives and spinning management
		ball.scale = max(2 - (1.5 / hpe), 1); //get smaller each hit
		if (ball.isTouching(cube) && (ball.rotationSpeed == 0)) { //deduct life when not spinning and on contact and cause spinning
			hpe--;
			if (hpe > 0) score += 15; //on a hit which didn't kill it
			if (!sMute) playSound("sounds/category_pop/puzzle_game_ui_bubble_01.mp3");
			if (hspd != 0) ball.rotationSpeed = hspd * 20;
			else if (tspd != 0) ball.rotationSpeed = tspd * 20;
			else if (vspd != 0) ball.rotationSpeed = vspd * 20;
			else ball.rotationSpeed = 20;
		}
		if (ball.rotationSpeed != 0) { //when spinning, slow down and eventually stop
			ball.rotationSpeed = ball.rotationSpeed * 0.8;
			if (abs(ball.rotationSpeed) < 0.1) ball.rotationSpeed = 0;
		}
		if ((ball.rotationSpeed == 0) && (ball.rotation != 0)) { //if not spinning and out of position, get into position
			ball.rotation = 0;
		}
		//death
		if ((hpe <= 0) || (ball.isTouching(explos))) {
			if (!ball.isTouching(explos)) {
				squash++;
				score += 50 + stage;
				eyesTotal++;
			}
			ball.destroy();
			if (stage >= 30) achUnlock(39); //Destroy an Evil Eye past stage 29 (achievement)
			if (animate) {
				var bdead = createSprite(ball.x, ball.y);
				bdead.setAnimation(ima + "eye_dead" + suf);
				bdeads.add(bdead);
				bdeads.setDepthEach(10.6);
				bdeads.setLifetimeEach(5);
			}
			if (!sMute) playSound("sounds/category_puzzle/puzzle_game_collapse_chatter_02.mp3", false);
			tttm = 0;
		}
	}
	//fireballs (bullets)
	for (var j = 0; j < bullets.length; j++) {
		var fir = bullets.get(j);
		var normalSpd = min(max(12, stage * 0.6), 17);
		//fireball movement
		if (willpause) {//freeze fireballs when paused
			fir.setSpeedAndDirection(0, fir.rotation);
		} else if (fir.getSpeed() == 0) {//unfreeze frozen fireballs when unpaused
			fir.setSpeedAndDirection(normalSpd, fir.rotation);
		}
		//  ¯\_(ツ)_/¯
		
		if ((fir.isTouching(solid) || fir.isTouching(cube) || fir.isTouching(explos) || fir.isTouching(boxs) || fir.isTouching(bads) || fir.isTouching(thorns) || (fir.isTouching(boxs)) || (stun > 0))) {
			//first before any destruction animations or destroy(), we deduct if hit player
			if (fir.isTouching(cube)) {
				if (buff == "thornArmor") hurt(25, 60, 0);
				else hurt(100, 60, 0);
			}
			if (!sMute) playSound("sounds/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3", false);
			//now destroy and animate pop
			if (animate) {
				var pop = createSprite(fir.x, fir.y);
				pop.setAnimation(ima + "pop" + suf);
				pop.Depth = 10.5;
				pop.lifetime = 7;
			}
			fir.destroy();
		}
		//lag prevention - getting rid of fireballs that went far away
		if (fir.x > 1920 || fir.y < -600) {
			fir.destroy();
		}
	}
}

function spawnFoes() {
	//spawn bad cubes
	var spawntime = 0;
	if (bads.length < 10) { //decrease time left until spawning when the population is under the maximum
		spawntime = max(1200 / (floor(stage / 10) + 1), 100);
		if ((spawner < spawntime) && (stage != 0)) spawner++;
	}
	if ((spawner >= spawntime) && (bads.length < 10) && (boxes > 0)) { //spawn a random enemy from time to time
		var bad = createSprite(2000, 272); //hold it away for this line x pos wise.
		var choice = randomNumber(1, 2); //spawn before or after player's x coord, and not in it's 400px range
		if (choice == 1) bad.x = randomNumber(150, cube.x - 200);
		if (choice == 2 || cube.x < 350) bad.x = randomNumber(cube.x + 200, 1500);
		bad.setAnimation(ima + "bad_cube" + suf);
		bads.add(bad);
		bad.pause();
		spawner = 0;
		if (!sMute) playSound("sounds/category_transition/puzzle_game_upgrade_big_03.mp3", false);
	}
	//spawn thorn heads
	if ((stage >= 5) && (thorns.length <= 15) && (boxes > 0)) { //if in a stage above stage 9 and with less than 9 thorns
		if (tspawner < tspawntime) tspawner++;
		else {
			var thorn = createSprite(2000, 272);
			var tchoice = randomNumber(1, 2); //spawn before or after player's x coord, and not in it's 400px range
			if (tchoice == 1) thorn.x = randomNumber(150, cube.x - 200);
			if (tchoice == 2 || cube.x < 350) thorn.x = randomNumber(cube.x + 200, 1500);
			thorn.setAnimation(ima + "tri" + suf);
			thorns.add(thorn);
			thorn.depth = 1.1;
			thorn.pause();
			spawner = 0;
			if (!sMute) playSound("sounds/category_transition/puzzle_game_upgrade_big_04.mp3", false);
			tspawner = 0;
			tspawntime = max((randomNumber(3, 4) * 500) / (ceil(stage / 10)), 150);
		}
	}
}

function hurt(dmg, rec, sound) {
	if (recover == 0 && stageRecover == 0) { //get hit
		if (sound != 0 && (!sMute)) playSound(sound, false);
		recover = rec;
		hp -= dmg;
		if (buff == "thornArmor" && hp <= 0) {
			hp = 25;
		}
		hits++;
	}
}

function powerUps() {
	//power up management
	var justHadPower = false;
	if ((kuse) && (curPowers.length > 0)) {
		if (using > 0) {
			curPowers.shift(); //if a power is already in use, get rid of it and start fresh with the nect
			justHadPower = true;
			using = 0;
			if (!sMute) playSound("sounds/category_digital/power_down_2.mp3", false);
		}
		if (curPowers.length > 0 && !justHadPower) { //in the case that you have no other power after scrapping your current, this will return false
			using = timelimit - min(stage, 40); //this means you are now using the first item in the current powers array
			if (!sMute) playSound("sounds/category_collect/vibrant_game_power_booster_touch.mp3", false);
		}
	}
	if (curPowers.length <= 0) using = 0;
	var diminish = true;
	if (using > 0) {
		if (diminish) using--; //when a power is in use
	}
	if (using == 1) { //this happens at 1 since otherwise the power will always be shifted away before there is a chance for kuse to be true
		curPowers.shift(); //when timer runs out remove the current (first item in array will have always been the one being used)
		if (!sMute) playSound("sounds/category_digital/power_down_2.mp3", false);
		using = 0;
	}
	//power up Gui
	for (var i = 0; i < slots.length; i++) {
		var slot = slots.get(i);
		slot.x = camera.x + 290; // - hspd;
		if (shake > 0 && shakable) {
			slot.y = randomNumber(camera.y - 285 + i * 60, camera.y - 285 + i * 60 - magn);
		} else {
			slot.y = camera.y - 285 + i * 60;
		}
		//animation
		if ((curPowers.length > 0) && (typeof curPowers[i] != 'undefined')) slot.setAnimation(ima + "" + curPowers[i] + suf);
		else slot.setAnimation("INVISIBLE");
		slot.pause();
		if ((curPowers.length > 0) && (using > 1) && (i == 0)) {
			slot.setFrame(1);
			if (diminish) slot.scale -= 1 / (timelimit - min(stage, 40));
		} else {
			slot.setFrame(0);
			slot.scale = 1;
		}
		if (kuse) slot.scale = 1;
	}
	//set actual current buff in use (based on the used power string)
	if ((curPowers.length > 0) && (using > 1)) buff = curPowers[0];
	else buff = "none";

	//set player image suffixes
	if (colour && costumes) {
		if (buff == "thornArmor") co = "_armor";
		else if (buff == "gigaCube") co = "_big";
		else if (buff == "superKinetic") co = "_kinetic";
		else if (buff == "quakeStun") {
			if (kdown && shake > 0 && grounded) co = "_stunned";
			else co = "_stun";
		} else if (buff == "tripleJump") co = "_jumpy";
		else co = skins[skin];
	} else {
		if (buff == "gigaCube" && !colour) co = "_big";
		else if (buff == "gigaCube" && colour) co = "_bigNoFace";
		else co = "";
	}
}

function aesthetics() {
	if (grassShow) {
		plants.setVisibleEach(true);
		for (var i = 0; i < plants.length; i++) { //grass patch rustle
			var patch = plants.get(i);
			patch.x = Gplaces[i]; //return patch to it's respective initial location, as to undo the last frame's vibration displacement
			if (patch.isTouching(cube)) { //two ways to shake the grass
				if (hspd != 0) patch.x += randomNumber(-acspd / 2, acspd / 2);
				if (shake > 0) patch.x += randomNumber(-magn / 2, magn / 2);
			}
		}
	} else if (plants.get(0).visible == true) plants.setVisibleEach(false);
	if (cloudShow) {
		sky.setVisibleEach(true);
		sky.setDepthEach(0.01);
		for (var j = 0; j < sky.length; j++) { //clouds movement
			var puff = sky.get(j);
			if (themeNum == 3) {//if in winter theme
				//use the first two
				if (j == 0 || j % 2 == 0) {
					puff.y++;
					if (puff.y > 856) puff.y = -1256;
				} else {
					puff.y++;
					if (puff.y > 856) puff.y = -1256;
				}
			} else {
				puff.x += 0.25;
				if (puff.x > 2200) puff.x = -150; //loop back to the start of room when reach the end
			}
		}
	} else if (sky.get(0).visible == true) sky.setVisibleEach(false);
}

function cameraMovement() {
	//camera range
	if (statChecking == 0 && !transing) {
		if ((cube.x > 237.4) && (cube.x < 1580)) { //so camera only follows vertical once a certain height above the floor is reached
			var xDest = cube.x;
			if (buff != "superKinetic") camera.x += (xDest - camera.x) / 4; //camera follows horizontal movement
			else camera.x = xDest;
		}
		if (camera.x > 237.4 && cube.x < 237.4) {//when camera didn't catch up enough to the left
		  camera.x += (cube.x - camera.x) / 4; //camera follows horizontal movement
		}
		if (camera.x < 237.4) {
		  camera.x = 237.4;
		}
		if (cube.y <= 110) { //so camera only follows vertical once a certain height above the floor is reached
			if (quake > 0) { //only start following player's y once it hits the ground for the first time, how special!
				var yDest = cube.y;
				if (buff != "superKinetic") camera.y += (yDest - camera.y) / 2; //camera follows vertical movement
				else camera.y = yDest;
			}
		} else if (camera.y < 100 && shake == 0 && teeth) camera.y = 100; //if cube is on ground but the shaking caused displacement
	}

	//too far to the right
	if (cube.x > 1900 && !inTutorial) {
		pm.visible = false;
		secret.visible = false;
		cube.x = 50;
		camera.x = 237.4;
		camera.y = -1000;
		vspd = 0;
		if (!sMute) playSound("sounds/category_puzzle/puzzle_game_magic_bubble_01.mp3", false);
		if (boxes > 2 || stage < 10) { //when you don't get a mercy skip.
			resetKinda("You have just been returned to before you started this stage.");
		} else console.log("I was going to restart the stage.. But I forgive you - there were only a few boxes left, so just go on.");
		boxes = 0;
		savedBoxes = [];
		savedThorns = [];
		savedBads = [];
		savedEyes = [];
		boxs.destroyEach();
		resets++;
	} else {
		if (camera.x < 1500) { //wait until camera makes it's way back to player to show these unwanted sights
			secret.visible = true;
		}
		if (cube.x > 1900) { //in tutorial 
			cube.x = 50;
			camera.x = 237.4;
			if (!sMute) playSound("sounds/category_puzzle/puzzle_game_magic_bubble_01.mp3", false);
			if ((lesson == 7 || lesson == 8) && inTutorial) {
				savedBoxes = [];
				boxs.destroyEach();
				boxes = 0;
			} else if (inTutorial) {
				if (!lessonDone) {
					if (!sMute) playSound("sounds/category_puzzle/puzzle_game_magic_bubble_01.mp3", false);
					savedBoxes = [];
					teeth = true;
					tutorialStageSetup();
				}
			}
		}
	}
	//easter egg?
	if ((boxes == 0) && (!lwjump) && buff == "none" && !inTutorial) { //...nothing to see here... :)
		secret.visible = true;
		if (secret.x > camera.x - 300 && secret.x < camera.x + 300 && secret.y > camera.y - 300 && secret.y < camera.y + 300) achUnlock(40); //did you find it?
	} else secret.visible = false;
}

function resetKinda(message) {
	if (dot.y > 200 && !inTutorial) { //if the dot is already above ground, meaning there is no reason to skip or reset, no penalties will apply
		if (stage > 0) stage--;
		if ((stage < 10 && boxes < 2) || (boxes > 2)) justReset = true;
		recover = 60;
		if (!inTutorial) console.log(message);
	}
}

function gui() {
	//GUI
	//box icon for boxes remaining number and S icon for stage
	boxy.x = camera.x - 300;
	st.x = camera.x - 300;
	if ((shake > 0) && (!pause) && shakable) {
		boxy.y = randomNumber(camera.y - 262, camera.y - 262 - magn);
		st.y = randomNumber(camera.y - 302, camera.y - 302 - magn);
	} else {
		boxy.y = camera.y - 262;
		st.y = camera.y - 302;
	}
	if (shards.length > 0) boxy.scale = 0.75; //get bigger when smashing boxes
	else boxy.scale = 0.6;
	if (boxes != 0) st.scale = 0.75; //get bigger when smashing boxes
	else st.scale = 0.6;
	//manage score
	score = max(score, 0);
	//health display and health management
	for (var i = 0; i < lives.length; i++) {
		var lif = lives.get(i); //the first of the group is the farthest to the right
		lif.x = -110 + camera.x + 55 * i;
		if (recover > 55) {
			if (recover > 58) lif.setFrame(1);
			lif.y = camera.y - 262 - randomNumber(-6, 6);
		} else {
			if ((shake > 0) && (!pause) && shakable) lif.y = randomNumber(camera.y - 262, camera.y - 262 - magn);
			else lif.y = camera.y - 262;
			lif.setFrame(0);
		}
		//half hearts and empty hearts and full hearts depending on hp and which heart the for loop is dealing with
		if (hp > (i + 1) * 200 - 100) lif.setAnimation(ima + "life" + suf);
		else if (hp > (i + 1) * 200 - 200) lif.setAnimation(ima + "life_half" + suf);
		else lif.setAnimation(ima + "life_empty" + suf);
		lif.pause();
		//heart beating when gained life
		if (ghp > 0) lif.scale = 1.15; //get bigger when smashing boxes
		else lif.scale = 1;
	}
	if (ghp > 0) ghp--;
	ghp = max(ghp, 0);
	hp = round(max(min(hp, 1000), 0)); //keep hp at whole numbers in the 0 to 1000 range

	//stats screen follow underneath
	statsbg.x = camera.x;
	borderbg.x = camera.x;

	//speed bar
	if (speedBarShow) {
		bar.visible = true;
		bar.x = camera.x - 315;
		bar.y = camera.y + 329;
		if ((floor(abs(hspd)) > 0) && (floor(abs(hspd)) <= 10)) bar.setFrame(floor(abs(hspd)));
	} else bar.visible = false;
	
	//tutorial director arrow
	if (inTutorial || showDirections) {
		director.y = camera.y;
		var dirdir = 0;//direction of the director (right left or none)
		
		if (inTutorial) {
			dirdir = getDirdir();//get direction given the situation
		} else if (savedBoxes.length > 0 && boxs.length == 0) {
			if (cube.x < savedBoxes[0][0]) {
				dirdir = 0;
			} else if (cube.x > savedBoxes[0][0]) {
				dirdir = 1;
			} else {
				dirdir = 2;
			}
		} else if (abs(camera.x - dot.x) > 350 && boxes == 0) {
			if (dot.x > camera.x) {//dot is to the right
				dirdir = 0;
			} else if (dot.x < camera.x) {//dot is to the left
				dirdir = 1;
			}
		} else {
			dirdir = 2;
		}
	  
		switch (dirdir) {
			case 0: //point right
			  if (offsetX > 0) offsetX -= 10;
			  director.x = offsetX + camera.x + 300 + (7 * sin(11 * sinCounter));
				director.visible = true;
				director.mirrorX(1);
				break;
			case 1: //point left
			  if (offsetX > 0) offsetX -= 10;
				director.x = -offsetX + camera.x - 300 - (7 * sin(11 * sinCounter));
				director.visible = true;
				director.mirrorX(-1);
				break;
			default: //no point
			  director.x = camera.x + director.mirrorX()*(300 + offsetX);
			  if (offsetX < 60) offsetX += 10;
				if (abs(offsetX) == 60) director.visible = false;
				break;
		}
	} else director.visible = false;
}

function paused() {
	if (willpause) {
		//all this happens when the game is paused
		//entities during pause
		cube.setFrame(0);
		cube.pause();
		bads.setVelocityXEach(0);
		cube.visible = true;
		for (var y = 0; y < bads.length; y++) {
			var sploopy = bads.get(y);
			sploopy.pause(); //pause animation of enemies (for bug)
		}
		if (!pause) {
			//do all this only for the first frame of a pause
			pmspd = 50;
			if (!sMute) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
			option = 1;
		}
		pmspd -= 2;
		pmspd = max(pmspd, 0);
		pause = true; //pause right away when pressed p during unpaused
		//pause menu slide in visual effect
		if (pm.x < camera.x) {
			pm.x += pmspd * mspd;
		} else {
			//finally all set in proper paused position
			pm.x = camera.x;
		}
		once4 = true;
	} else {
		if (once4) {
			once4 = false;
			if (!sMute) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
		}
		//pause menu slide out effect
		pmspd += 2;
		pmspd = min(pmspd, 50);
		if (pm.x > camera.x - 500) {
			if (pm.x < camera.x + 500) pm.x += pmspd * mspd;
			else {
				pm.x = camera.x - 600;
				pause = false;
				if (yelling == 1) { //if you just quit
					transing = true;
					yelling = 0;
				}
			}
		} else {
			pm.x = camera.x - 600; //stay way behind (there was a bug that if I set it to -501 (right before the limit), when you move left during unpause, the pm would activate the move to the left sequence)
		}
	}
	if (statChecking == 0) pm.y = camera.y - 50; //always (except when stat checking of course) follow y coords
	//text only appears during pause = true, so that means as it's going out to the right side of screen in a willpause = false, the text will still show
	//all x coordinates relative to pm.x must add pmspd to them in order to be properlly inline.
	//selector follow always even when not paused
	arrow.x = pm.x - 90;
	if (statChecking == 0) arrow.y = pm.y - 57 + (option - 1) * 40;
	if (pause) {
		var textstatic = 1;
		if (pm.x == camera.x) textstatic = 0;
		for (var i = 0; i < pmoptions.length; i++) {
			var opaque = true;
			if ((hp == 0 && pmoptions[i] == "Unpause") || (inTutorial && lessonDone && pmoptions[i] == "Restart")) {
				opaque = false; //faded unpause option during a gameover pause
			}
			var optionName = pmoptions[i];
			if (inTutorial && pmoptions[i] == "Stats") optionName = "Lessons";
			if (inTutorial && pmoptions[i] == "Restart") optionName = "Reset";
			if (!inTutorial && pmoptions[i] == "Unpause" && hp == 0) {
				if (gct == 20) optionName = "You can't";
				else if (gct == 21) optionName = "unpause";
				else if (gct == 22) optionName = "anymore.";
				else if (gct == 23) optionName = "Either";
				else if (gct == 24) optionName = "click";
				else if (gct == 25) optionName = "on restart";
				else if (gct == 26) optionName = "to play";
				else if (gct == 27) optionName = "again, or";
				else if (gct == 28) optionName = "Quit to";
				else if (gct == 29) optionName = "return to";
				else if (gct == 30) optionName = "the menu.";
				if (gct > 60) optionName = "Goodbye!";
				else if (gct > 53) optionName = "game.";
				else if (gct > 52) optionName = "clicker";
				else if (gct > 51) optionName = "not a";
				else if (gct > 50) optionName = "This is";
			}
			write(optionName, pm.x - (pmspd / mspd) * textstatic, pm.y - 72 + i * 40, myFontNormal, CENTER, 30, BOLD, opaque);
		}
		textStyle(NORMAL);
		//selector mechanics
		if (willpause) {
			if (statChecking == 0) {
				if (kwdown) option++; //move lower on selection list
				if (kwup) option--; //move higher on selection list
				if (option > pmoptions.length) option = 1;
				if (option < 1) option = pmoptions.length;
				if ((kwdown || kwup) && (!sMute)) playSound("sounds/Equip-scroll-click.mp3", false);
			}
			//select choice
			if (ksel) {
				arrow.x += 10;
				if ((option == 1 && hp > 0) || (option != 1)) {
					if (!sMute) playSound("sounds/category_objects/click.mp3", false);
				} else {
					if (!sMute) playSound("sounds/Metal-Bang3-672025076.mp3", false);
					gct++;
				}
			}
			//based on which option the selector is on, do the selection's operations
			if (ksel) {
				if (option == 1 && hp > 0) { //unpause
					if (!(!willpause && pause)) willpause = !willpause;
				}
				if (option == 2) { //go to statchecking area
					if (statChecking != 2) statChecking = 1; //this means you are in or going to or leaving the stat viewing area - being there prevents alternative camera movement, as well as unpausing via "p" or scrolling to another option (therefor selecting a dif. option is impossible.)
				} else statChecking = 0;
				if (option == 3) { //restart current game
					gct = 0;
					if (!inTutorial) {
						games++;
						restartGame();
						if (!(!willpause && pause)) willpause = !willpause;
					} else {
						if (option == 3 && !lessonDone) {
							if (!(!willpause && pause)) willpause = !willpause;
							if (!sMute) playSound("sounds/category_puzzle/puzzle_game_magic_bubble_01.mp3", false);
							savedBoxes = [];
							teeth = true;
							tutorialStageSetup();
						} else if (option == 2 && !sMute) playSound("sounds/Metal-Bang3-672025076.mp3", false);
					}
				}
				if (option == 4) { //exit current game (and save the games current stats to your record) and go back to menu
					gct = 0;
					yelling = 1;
					if (!(!willpause && pause)) willpause = !willpause;
				}
			}
		}
	}
}

function displayStats() {
	if (statChecking == 1) {
		dot.visible = false;
		if (!colour) statsbg.visible = false;
		if (camera.y < 800) { //smooth diving underground to go see those stats!
			camera.y += csspd * mspd;
			csspd += 0.5;
		} else camera.y = 801;
		if (camera.y == 801) { //when the camera is safely at this y coord, show the stats text drawings
			var xrel = camera.x; //x relative
			var yrel = camera.y; //y relative
			//These are the current game stats: stage, score, hp, boxes, broke, hits, squash, dista, jumps, quake, resets
			var allStatsKeys = ["Stage", "Score", "Health Points", "Hits Taken", "Boxes Left", "Boxes Broke", "Foes Left", "Foes Squashed", "Steps Moved", "Jumps Made", "Quake Rating", "Resets/Skips", "Explosions", "Bonuses", "Power ups"];
			var allStatsValues = [stage, floor(score * 100), hp, hits, boxes, broke, bads.length + thorns.length + shooters.length + savedBads.length + savedThorns.length + savedEyes.length, squash, floor(dista / 48), jumps, floor(quake * 10), resets, explosions, bonuses, powerups];
			if (inTutorial) {
			allStatsKeys = [
			  "Basic movement", "Wall jumping", "Quaking the ground", "Moving quickly",
			  "Breaking a box", "Climbing a box stack",
			  "The Aim of the game", "Mercy skips", "Resetting a stage",
			  "Bad Cubes", "Stacks of Bad Cubes", "Stranded Bad Cubes", "Thorn Heads", "Evil Eye", "Large Evil Eye",
			];
			allStatsValues = [
			  "Practice Stage", "Bonus Box", "Boom Box",
			  "TripleJump", "GigaCube", "ThornArmor", "SuperKinetic", "QuakeStun",
			  "Buff Box",
			  "More Practice"
			];
			}
			
			//header
			var header = ((inTutorial) ? "Choose a Lesson" : "This Game's Current Stats");
			write(header, xrel, yrel - 250, myFontNormal, CENTER, 30, NORMAL, true);
			//info
			//Stats key name (displayed on left)
			var yspacing = 25;
		  if (!inTutorial) {
  			for (var i = 0; i < allStatsKeys.length; i++) {
  				write(allStatsKeys[i], xrel - 230, yrel - 180 + i * yspacing, myFontNormal, LEFT, 24, BOLD, true);
  				write(allStatsValues[i], xrel + 230, yrel - 180 + i * yspacing, myFontNormal, RIGHT, 24, BOLD, true);
  			}
		  } else {
		    if (kwup) {
				lessonSelect--;
				playSound("sounds/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
			}
		    if (lessonSelect > 24) lessonSelect = 0;
		    if (kwdown) {
				lessonSelect++;
				playSound("sounds/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
			}
		    if (lessonSelect < 0) lessonSelect = 24;
		    
		    var suffix = "";
		    var alpha = true;
		    for (var j = 0; j < allStatsKeys.length; j++) {
		      suffix = ((j == lessonSelect) ? "> " : ""); 
		      alpha = (((j <= lessonsDone) || beatTutorial) ? true : false);
  				write(suffix + allStatsKeys[j], xrel - 230, yrel - 180 + j * yspacing, myFontNormal, LEFT, 24, BOLD, alpha);
  			}
  			for (var k = 0; k < allStatsValues.length; k++) {
  			  suffix = ((k+15 == lessonSelect) ? " <" : ""); 
  			  alpha = (((k+15 <= lessonsDone) || beatTutorial) ? true : false);
  			  write(allStatsValues[k] + suffix, xrel + 230, yrel - 180 + k * yspacing, myFontNormal, RIGHT, 24, BOLD, alpha);
  			}
		  }
			//footer
			var footer = ((inTutorial) ? "Press Enter to Select" : "Press Enter to Return");
			if (showingBar <= 0) { //when an achievement is earned, the footer is hidden
			  write(footer, xrel, yrel + 230, myFontNormal, CENTER, 30, NORMAL, true);
			}
			//if you clicked enter
			if (ksel) {
			  statChecking = 2; //so this won't run any of the statChecking == 0 statements, AND it won't run the camera y position lock at 801, enabling the return transition
			  if ((lessonSelect <= lessonsDone || beatTutorial) && inTutorial && lessonSelect != lesson) {
  			  stage = lessonSelect;
  			  lesson = stage;
  			  if (!sMute) playSound("sounds/category_puzzle/puzzle_game_magic_bubble_01.mp3", false);
  				savedBoxes = [];
				curPowers = [];
  				teeth = true;
  				lessonDone = false;
  				dotHeight = -2000;
  				Tstep = 0;
				Tml = getLines(Twords[lesson]);
				makeLines();
				stepMsg = 0;
  				tutorialStageSetup();
			  } else if (inTutorial && lessonSelect == lesson) {
			    //nothing
			  } else if (inTutorial) {
			    if (!sMute) playSound("sounds/Metal-Bang3-672025076.mp3", false);
			    statChecking = 1;//nope
			  }
			}
		}
	} else if (statChecking == 2) { //ease out sequence when returning
		if (camera.y > pm.y + 50 - csspd) { //until it gets back to the exact same place as before (good thing we have the pause menu to recall those coords!)
			if (csspd > 0) csspd = 0;
			csspd -= 0.5;
			camera.y += csspd * mspd;
		} else {
			csspd = 0;
			statChecking = 0; //officially end statChecking state
		}
	} else dot.visible = true;
}

function recordData() { //this function records the in game variables to the all time variable counters (useful for the stats place in menu)
	topstage = max(topstage, stage); //stage record
	totalBroke += broke; //total boxes broke
	totalSquash += squash; //total enemies destroyed
	totalHits += hits; //total hits
	totalDista += dista; //total distance
	totalJumps += jumps; //total jumps
	totalQuake += quake; //total quake rating
	totalResets += resets; //number of resets/skips
	totalExplosions += explosions; //total explosions
	totalPowerups += powerups; //total powerups collected
	totalBonuses += bonuses; //total bonuses got

	//highscore management
	var actualScore = floor(score * 100);
	highscores.push(actualScore); //now there are 11 items in the array
	highscores.sort(function(a, b) {
		return b - a;
	}); //order from greatest to least, this will put that most recently added score to the end if it didn't beat any of the top 10
	highscores.pop(); //remove the last item in the array, bringing the highscores array back to top 10

	//achievements counter
	ach = 0;
	for (var i = 1; i < unlocked.length; i++) {
		if (unlocked[i]) ach++; //increase ach every time it finds an unlocked being true
	}
}

function restartGame() { //However, the main data is saved in local Storage
	if (!inTutorial) {
		recordData(); //save the game upon every reset or quit
		saveGame();
	}
	if (!sMute && !transing) playSound("sounds/category_transition/transition_page_1.mp3");
	score = 0; //actual score
	boxes = 0; //box count (number remaining)
	stage = 0; //the larger this number, the more difficult it gets: e.g. higher spawn rates, more boxes
	broke = 0; //number of boxes broke
	squash = 0; //number of enemies (any type) destroyed
	hits = 0; //number of times hit by an enemy
	dista = 0; //total horizontal distance traveled
	jumps = 0; //number of jumps made
	quake = 0; //total magnitude the ground was shook
	resets = 0; //number of times you went too far right to reset the boxes
	explosions = 0;
	bonuses = 0;
	powerups = 0;
	hp = 1000;
	rustickCount = 0;
	killedaThorn = false;
	savedBoxes = [];
	savedThorns = [];
	savedBads = [];
	savedEyes = [];
	boxs.destroyEach();
	bads.destroyEach();
	thorns.destroyEach();
	shooters.destroyEach();
	bullets.destroyEach();
	dot.x = randomNumber(450, 323.6);
	if (inTutorial) dotHeight = -2000;
	cube.x = 600;
	cube.y = 50;
	hspd = 0;
	vspd = 0;
	grounded = false;
	teeth = true;
	acspd = 0;
	curPowers = [];
	using = 0;
	slots.setAnimationEach("INVISIBLE");
	tttm = 140;
	if (!transing) {
		camera.x = 600;
		camera.y = 50;
	}
	if (inTutorial) {
		lesson = 0;
		Tstep = 0;
		Tml = getLines(Twords[lesson]);
		makeLines();
		stepMsg = 0;
		lessonDone = false;
		dot.x = max(100, min(1500, cube.x + 150));
	}
	resetAchCounts(); //reset achievment counters
}

function controls() {
	//get user input for player movement variables
	if (statChecking == 0 && !transing) {
		kleft = keyDown("left") || keyDown("A");
		kright = keyDown("right") || keyDown("D");
		kjump = keyWentDown("up") || keyWentDown("W");
		kjumphold = keyDown("up") || keyDown("W");
		kdown = keyDown("down") || keyDown("S");
		if (playing && !transing && hp > 0 && (keyWentDown("p") - mouseWentDown("leftButton"))) {
			if (!(!willpause && pause)) willpause = !willpause;
		}
	}
	ksel = keyWentDown("ENTER"); //select
	kwdown = keyWentDown("down") || keyWentDown("S");
	kwup = keyWentDown("up") || keyWentDown("W");
	kwleft = keyWentDown("left") || keyWentDown("A");
	kwright = keyWentDown("right") || keyWentDown("D");
	kuse = keyWentDown("shift"); //use next power
	//avoids visual bug from being seen 
	if (!willpause && !pause) {
		pm.visible = false;
		if (playing) arrow.visible = false;
		else arrow.visible = ((place == 3 && borderbg.x == 1840.5 && borderbg.y == 805) ? true : false);
	} else if (!transing) {
		pm.visible = true;
		arrow.visible = true;
	}
	//music and sound
	if (!transing) {
		if (keyWentDown("m")) mMute = !mMute;
		if (keyWentDown("n")) sMute = !sMute;
	}
	debugCont();
}

function scored(points, hps, pumphp, x, y) {
	if (points) {
		score += points;
	}
	if (hps) {
		hp += hps;
	}
	write();
}

function death() {
	//death sequence (placeholder for now) - soon to be put in function
	if (hp == 0) {
		if (once5) {
			once5 = false;
			willpause = true;
			if (!sMute) playSound("sounds/category_transition/slow_time.mp3", false);
			if (!sMute) playSound("sounds/category_explosion/vibrant_game_bright_distroy_item_1.mp3", false);
			if (!inTutorial) saveGame();
		}
		if (cube.scale > 0.1) cube.scale -= 0.1;
		else cube.visible = false;
		hp = 0;
		textStyle(BOLD);
		var phrase = "Game Over";
		var offset = 200;
		if (lesson == 24 && inTutorial && boxes == 0) {
			phrase = "Tutorial Done!";
			offset = 270;
		}
		if ((pm.x + 10 > camera.x) && (pm.y + 50 == camera.y)) shakyText(phrase, 5.5, camera.x - offset, camera.y + 100, CENTER, 0, "black", "white", 50, 36, myFontNormal);
		textStyle(NORMAL);
	} else {
		cube.scale = 1;
		once5 = true;
	}
}

function soundManagement() {
	if (mMute) {
		stopSound("sounds/Nature-Cube-Bloquake-OST.mp3");
		stopSound("sounds/bloquake-menu-soundtrack.mp3");
		stopSound("sounds/Nature-Cube-Night-Theme-Bloquake-OST.mp3");
		stopSound("sounds/Nature-Cube-Vintage.mp3");
		once7 = 1;
		note.visible = true;
		hasMuted = true;
	} else if (once7 == 1) {
		if (playing) {
			if (themeNum == 0 || themeNum == 3) {
				playSound("sounds/Nature-Cube-Bloquake-OST.mp3", true); //music thanks to of BC mix music and Me, Finesden
			} else if (themeNum == 1) {
				playSound("sounds/Nature-Cube-Night-Theme-Bloquake-OST.mp3", true); //music thanks to of BC mix music
			} else {
				playSound("sounds/Nature-Cube-Vintage.mp3", true);
			}
		} else {
			playSound("sounds/bloquake-menu-soundtrack.mp3", true);
		}
		once7 = 0;
		note.visible = false;
	}
	if (sMute) {
		speaker.visible = true;
		hasMuted = true;
	} else speaker.visible = false;
	var offset = 300;
	note.x = camera.x + offset;
	speaker.x = camera.x + offset;
	note.y = camera.y + offset * 1.02;
	speaker.y = camera.y + offset * 1.02;
	note.depth = 105;
	speaker.depth = 105;
	if (sMute && mMute) speaker.y = camera.y + offset * 1.02 - 60;
}

function shakyText(word, magni, x, y, alignx, fall, colour1, colour2, size, spacing, font) {
	textFont(font);
	textAlign(alignx, TOP);
	textSize(textScale * size);
	for (var i = 0; i < word.length + 1; i++) {
		var current = word.slice(i - 1, i); //grab current letter
		var range = 0;
		if (fall == 0) range = randomNumber(-magni, magni);
		else {
			range = coll * 7 * randomNumber(10, 20);
		}
		if (word.slice(i, i + 1) == "m" || word.slice(i, i + 1) == "w" || current == "m" || current == "w") spacing += spacing / 12;
		fill(colour2);
		text(current, x + spacing * i - 2 + textOffsetX, y + range - 2 + textOffsetY);
		fill(colour1);
		text(current, x + spacing * i + textOffsetX, y + range + textOffsetY);
	}
}

function write(words, x, y, font, alignx, size, stylish, opaque) {
	textFont(font);
	textStyle(stylish);
	textSize(textScale * size);
	textAlign(alignx, TOP);
	var alpha = 1;
	if (!opaque) {
		alpha = 0.5;
	}		
	fill(rgb(255, 255, 255, alpha));
	text(words, x + textOffsetX - 2, y + textOffsetY - 2);
	fill(rgb(0, 0, 0, alpha));
	text(words, x + textOffsetX, y + textOffsetY);
}

function screenText() {
	//gui text
	if (playing) {
		var xreli = cammy.x;
		var yreli = cammy.y;
		
		//tutorial text
		if (inTutorial && !transing) {
			achBar.visible = true;
			if (statChecking == 0) achBar.y = camera.y + 275;
			wordBoxText(xreli - 240, yreli + 255);
		}

		//gui text (score, stage count and box count)
		var actScore = floor(score * 100);
		var stageGui = stage;
		if (inTutorial) {
			actScore = lessonName[lesson]; //the score is replaced with lesson name in the tutorial
			stageGui = stage + 1;
		}
		write(actScore, xreli, yreli - 320, myFontNormal, CENTER, 30, BOLD, true);
		write(stageGui, xreli - 275, yreli - 315, myFontNormal, LEFT, 30, BOLD, true);
		write(boxes, xreli - 275, yreli - 275, myFontNormal, LEFT, 30, BOLD, true);
	}

	//achievement notification
	if (showingBar > 0 && !inTutorial) { //checks if it it's during when achievement panel bar is shown, and not in tutorials
		
		showingBar--;
		achBar.visible = true;
		
		//page text
		var title = "";
		var xrel = achBar.x;
		var yrel = achBar.y;
		
		//achievement name
		title = achNames[achShowed];
		write('"' + title + '"', xrel - 240, yrel - 20, myFontNormal, LEFT, 20, ITALIC, true);
		
		//achievement goal
		title = achGoals[achShowed];
		write(title, xrel - 240, yrel + 5, myFontNormal, LEFT, 20, BOLD, true);
		
		//display sprite
		notifyImage.visible = true;
		if (achShowed != 42) {
			notifyImage.setAnimation("c_cube" + skins[achShowed]);
		} else {
			notifyImage.setAnimation(ima + "cube");
		}
		notifyImage.pause();
		
		//movement
		if (showingBar > (showTime - 10)) { //transition in
			achBar.y -= showingBar / 3.8;
			notifyImage.y -= showingBar / 3.8;
		} else if (showingBar < 10) { //transition out
			achBar.y += abs(showTime - showingBar) / 3.8;
			notifyImage.y += abs(showTime - showingBar) / 3.8;
		} else { //what it does in between (display text)
			achBar.y = camera.y + 270; //round it off to place
			notifyImage.y = camera.y + 270; //round it off to place
		}
		
	} else { //when not displaying any new achievement
		if (!inTutorial) {
			achBar.visible = false;
			achBar.y = camera.y + 500;
		}
		notifyImage.y = camera.y + 500;
		notifyImage.visible = false;
	}
	achBar.x = camera.x;
	notifyImage.x = camera.x + 220;
	cammy.x = camera.x;
	if (statChecking == 0) cammy.y = camera.y;
	
	//mini tutorial for basics if you skipped the tutorial
	if (!beatTutorial && games <= 2 && playing && !inTutorial) {
	  rustickCount = min(rustickCount+1, 500);
	  var helperText = "";
	  if (rustickCount >= 100 && !pause) {
		if (dista == 0) {
		  helperText = "Use the arrow-keys/AD to move";
		} else if (stage == 0) {
		  helperText = "Press Up/W to jump and touch the dot";
		} else if (stage == 1 && broke == 0) {
		  helperText = "Hold Down/S when falling to break boxes";
		} else if (!killedaThorn && thorns.length > 0) {
		  helperText = "Hold Down/S and slide into thorn's side";
		} else if (curPowers.length > 0 && (!powersHad[0] && !powersHad[1] && !powersHad[2] && !powersHad[3] && !powersHad[4])) { 
		  helperText = "Press shift to activate your powerup";
		} else if (stage >= 10 && resets < 2 && rustickCount >= 250) {
		  helperText = "Stuck? Go to far right to reset stage";
		} else if (rustickCount > 500 && !hasMuted) {
		  helperText = "Press M to mute music or N to mute sound";
		} else {
		  helperText = "";
	    }
	  } else {
	    helperText = "";
	  }
	  write(helperText, camera.x, cube.y - 85, myFontNormal, CENTER, 20, BOLD, true);
	}
}

/*
      ---------
      MAIN LOOP
      --------- 
*/

//[DRAW] LOOP
function draw() {
	if (!colour) {
		background("#c9c8c0"); //#dbdbc6 or try #b4b3ac, or lighter: #c9c8c0
		cube.tint = "white";
		selector.tint = "white";
	} else if (suf == "") {
		background("#78d3f9");
		cube.tint = "white";
		selector.tint = "white";
	} else if (suf == "_night") {
		background("#162143");
		cube.tint = "rgba(110,90,130,0.5)";
		selector.tint = "rgba(110,90,130,0.5)";
	} else if (suf == "_snow") {
		background("#abeded");
		cube.tint = "rgba(210,247,247,0.3)";
		selector.tint = "rgba(210,247,247,0.3)";
	}

	controls();
	if (playing) { //in game
		if (!pause && !transing) cubePhysics();
		if (!pause) boxPhysics();
		if (!pause) cameraMovement();
		if (!pause && !inTutorial) playingStages();
		else if (!pause) tutorialStages();
		if (!pause) baddiesPhysics();
		if (!pause) thornMechanics();
		if (!pause && !inTutorial) spawnFoes();
		if (!pause) shootersPhysics();
		if (!pause) aesthetics();
		if (inTutorial) guideControl();
		drawSprites();
		if (!pause) powerUps();
		if (statChecking == 0 && !transing && playing) gui();
		displayStats();
		if (!transing) paused();
		death();
		stopSound("sounds/bloquake-menu-soundtrack.mp3");

	} else { //in menu or submenus
		drawSprites();
		titleScreen();
		mainMenu();
		infoAreas();
		settingsPlace();
		vault();
		otherMenuStuff();
		stopSound("sounds/Nature-Cube-Bloquake-OST.mp3");
		stopSound("sounds/Nature-Cube-Night-Theme-Bloquake-OST.mp3");
		stopSound("sounds/Nature-Cube-Vintage.mp3");
		if (movingBack == true) backToMenu();
	}
	transition();
	soundManagement();
	if (!transing) screenText();
	if (!inTutorial) achievementWatchers();

	if (debugging) { //for debugging
		textSize(textScale * 20);
		fill("black");
		textFont(myFontNormal);
		text(frameRater, camera.x - 300 - hspd, camera.y + 300);
		if (sinCounter % 3 == 0) frameRater = round(World.frameRate);
	}
	if (sinCounter < 360) {
		sinCounter++;
	} else {
		sinCounter = 0;
	}
} 
{
	var frameRater = World.frameRate;
	var debugging = false;
	var inTutorial = false;
	var hasFocused = false;
	lives.setDepthEach(120);
	boxy.depth = 119;
	st.depth = 118;
	bar.depth = 121;
	var stageRecover = 0;
	var rustickCount = 0;
	var killedaThorn = false;
	var sinCounter = 0;
	var hasMuted = false;
}

/*
      --------------
      TUTORIAL STUFF
      --------------
*/
//text fit mechanics 
{
	var Twords = [
		"Welcome to Bloquake! My name's Blocky, the Bloquake guide! Press space to read on. Press 'p' to pause. Go on, try it! Select 'reset' if you ever get stuck. Or 'Lessons' to go back to the previous lesson. Press up to jump, and left/right to move. If you do what I say, a yellow dot will appear. Touch this dot to proceed.",
		"You're getting the hang of it! Anyways, did you know that you can wall-jump? Go and try jumping off of that wall over there on the left.",
		"And now, the game's main claim to fame: quake form. Hold the down arrow key, and you'll be in quake form. Jump, then enter quake form in midair, and then land.",
		"When you're in quake form, moving around is much faster. Try to quickly slide across the arena while in quake form.",
		"Hey, look - a box appeared! Your job is to break these things. To do so, you have to stomp on them in quake form.",
		"Boxes tend to come stacked. To climb up a stack of boxes, jump up against one while moving towards it. Once you're up at the top, jump up and smash your way down!",
		"This stage is a simulation of box spawning. In the main-playing-mode, your goal is to break all of the boxes that spawned in order to advance to the next stage. The higher the stage, the more boxes there will be. So go ahead and break them!",
		"What happens when you accidentally leave some boxes stranded in the air, but you can't reach them? Answer: use a mercy skip! If you're past stage 9 and there are 1 or 2 boxes left, slide as far as you can to the right. This erases all remaining boxes, allowing you to advance! Go ahead and try it!",
		"But what if you aren't past stage 9, or you have 3 or more boxes left? Answer: do the same thing as a mercy skip! Just one catch: you'll go back one stage. So unless you want to have to start a stage all over again, be careful.",
		"That is a bad-cube. It is bad. These guys spawn at the start of each stage and at other random times. They deal half a heart of damage, so be careful. To kill one, simply land on it while you're in quake form.",
		"Bad-cubes are quirky and like to climb up one another, and they can also levitate. Sometimes they can even spawn in stacks.",
		"When you get into situations like these, your best bet is to wall-jump or jump off a box then enter quake form when they are directly beneath you. Repeat this process until this annoying predicament is over.",
		"And you thought there was only one enemy? Behold the thorn-head! To kill one of these stationery fiends, wait until it's fully exposed, then quickly slide into it when in quake form. Don't try to stomp on them - it will hurt.",
		"If you thought that wasn't enough, let me introduce you to the evil-eye. After stage 10, you'll get to know this guy really well. To destroy it, simply touch it. But watch out when it reddens, it's about to shoot a batch of fireballs at you!",
		"Guess what? Evil-eyes can spawn with up to 3 lives, like this one! Remember that a new evil-eye will not spawn at the start of a stage if there is already an existing one. And once it exists, it can't gain any lives. ",
		"Here's a simple practice stage. Again, with box spawning, but this time with enemies too. Never forget that all you must do is break boxes to proceed. Although, you might want to kill enemies to make the job easier.",
		"Some of the boxes you'll come across are special. For instance, these special bonus boxes give you a small health boost of 25 to 100 hp when broken.",
		"Ah, the boom box. This box will explode upon breaking it. The explosion destroys all enemies and fireballs within range. It does not harm you, nor does it break boxes. And yes, this lesson is rigged so you can't stomp on the bad-cubes.",
		"Look at the top right of the screen. That's a powerup icon! Whenever you see one there, it means you have a cool powerup waiting to be used. This one is for the Triple-Jump powerup. To activate the powerup, press shift. The icon's white outline indicates that the powerup is active. During this time, pressing shift again will discard the current active powerup. Once the icon shrinks into nothing, you will no longer have the powerup. Anyways, Triple-Jump is like a double-jump but better. It even works with wall-jumping. See if you can break those two boxes.",
		"Next is Giga-Cube. With this ultimate powerup of destruction, anything that you touch will get demolished. But be careful not to get hurt amidst your rampage. Go ahead and have fun destroying everything.",
		"Powerup three out of five: Thorn-Armour. With this powerup, all damage is reduced by 75%! You also hurt all the enemies you touch.",
		"This one is called Super-Kinetic. It allows you to move a lot faster, jump a lot higher, and stomp very quickly. Try moving around!",
		"Now for the final powerup, Quake-Stun. With it, every time you pound the ground, you'll send an electrical pulse through the air, temporarily stunning all enemies in the arena. Show these enemies your stunning power!",
		"So how do you get these powerups in the game? The answer lies in these blue buff boxes. Break one to get a random powerup. You can have up to three powerups stored at once. Keep this in mind when you have a surplus of buff boxes. Also, recall that pressing shift while a powerup is active will discard that one. To complete this stage, break all the boxes and use up all your powerups.",
		"It all comes down to this. This stage is a simulation of what it's like at around stage 30. Always remember that Bloquake is about skill, strategy, and luck! Break all the boxes and then you're done! Good luck, and have fun playing Bloquake!",
		"This text will not appear. If this text does appear, then something went wrong. Please further investigate this issue. Thank you. -A message from Blocky. Blocky now has nothing more to say."
	];
} 
{
	var parags = 0;
	var Tmcpl = 40; //max characters per line
	var Tml = 0; //max number of lines
	var TwordCnt = 0; //word count
	var Tstep = 0;
	var lesson = 0;
	var thing;
	var box = 0;
	var linecount = 0;
	var lessonDone = false;
	dotHeight = -2000;
	Tml = getLines(Twords[lesson]);
	var actWords = ["", ""];
	makeLines();
	var lessonName = [
		"Basic movement", "Wall jumping", "Quaking the ground", "Moving quickly",
		"Breaking a box", "Climbing a box stack",
		"The Aim of the game", "Mercy skips", "Resetting a stage",
		"Bad Cubes", "Stacks of Bad Cubes", "Stranded Bad Cubes", "Thorn Heads", "Evil Eye", "Large Evil Eye",
		"Practice Stage", "Bonus Box", "Boom Box",
		"TripleJump", "GigaCube", "ThornArmor", "SuperKinetic", "QuakeStun",
		"Buff Box",
		"More Practice", "Tutorial Complete!"
	];
	var beatTutorial = false;
	var lessonsDone = 0;//actual amount of lessons completed
	var lessonSelect = 0;//for lesson select page
	var readStuff = false;
}

function getLines(string) {
	linecount = 0;
	thing = string.split(" ");
	for (var i = 0; i < thing.length; i++) {
		box += thing[i].length + 1;
		if (box >= Tmcpl) {
			if (i < thing.length) linecount++;
			box = 0;
		} else if (i == thing.length && box > 0) linecount++;
	}
	if (linecount % 2 != 0 && linecount != 0) linecount++;
	return linecount;
}

function wordBoxText(x, y) {
	boxNum = 1 + (Tstep / 2);//slide number for guide text
	var numSize = ((keyWentDown("space")) ? 24 : 22); 
	write(boxNum, x - 10, y + 12.5, myFontNormal, RIGHT, numSize, BOLD, true);
	write(actWords[0], x, y, myFontNormal, LEFT, 22, BOLD, true);
	write(actWords[1], x, y + 25, myFontNormal, LEFT, 22, BOLD, true);
}

function makeLines() {
	TwordCnt = 0;
	for (var j = 0; j < Tml; j++) {
		var Tline = strPart(Twords[lesson]);
		if (j == Tstep) actWords[0] = Tline;
		if (j == Tstep + 1) actWords[1] = Tline;
	}
}

function strPart(string) {
	var Tlist = string.split(" ");
	var TnewString = "";
	var TcharCount = 0;
	var TwordStrt = TwordCnt;
	for (var i = 0; i < Tlist.length; i++) {
		var Tplace = i + TwordStrt;
		if (TcharCount >= Tmcpl) break;
		if (Tplace < Tlist.length) {
			TcharCount += Tlist[Tplace].length + 1;
			TnewString += Tlist[Tplace] + " ";
		}
		TwordCnt++;
	}
	return TnewString;
}

function guideControl() {
	if (keyWentDown("space")) {
		Tstep += 2;
		makeLines();
		if (!sMute && Tstep < Tml) playSound("sounds/category_objects/click.mp3", false);
	}
	if (Tstep >= Tml && Tml != 0) {
		Tstep = 0;
		makeLines();
		if (!sMute) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
	}
}

function tutorialStages() {
	//cycle through the text
	//dot stuff
	if (animate) dot.play();
	else dot.pause();
	dot.y = dotHeight + 3 * sin(5 * sinCounter); //hovering
	if (cube.isTouching(dot)) { //check if touched dot
		hp = 1000;
		dot.visible = false;
		//dot pop
		if (animate) {
			var dpop = createSprite(dot.x, dot.y);
			if (colour) dpop.setAnimation("c_dot_pop" + suf);
			else dpop.setAnimation("pop");
			dpop.Depth = 0;
			dpop.lifetime = 7;
		}
		stage++;
		lessonsDone = min(max(lessonsDone, stage),24);
		if (beatTutorial) lessonsDone = 24;
		Tstep = 0;
		if (lesson < Twords.length - 1) lesson++;
		else lesson = 0;
		Tml = getLines(Twords[lesson]);
		makeLines();
		stepMsg = 0;
		if (!sMute) playSound("sounds/category_notifications/vibrant_game_modern_retro_touch_item_1.mp3", false);
		if (!sMute) playSound("sounds/category_collect/retro_game_coin_pickup_8.mp3", false);
		lessonDone = false; //so next lesson officially begins
		dotHeight = -2000;
		tutorialStageSetup();
	}
	
	if (readStuff == false && !beatTutorial) {
		 write("Press space to read on", camera.x, cube.y - 85, myFontNormal, CENTER, 20, BOLD, true);
		 if (keyWentDown("space")) readStuff = true;
	}
	tutorialCheckers();
	if (lesson == 24 && boxes == 0) {
		hp = 0;
		canPlay = true;
		beatTutorial = true;
		//Complete the tutorial achievement
		achUnlock(3);
	}

}

function lessonNeeds(condition) {
	if (!lessonDone) {
		if (condition) {
			if (!sMute && !lessonDone) playSound("sounds/category_collect/energy_bar_recharge_4.mp3", false);
			lessonDone = true;
		}
		if (lesson == 0) {
			dot.x = max(100, min(1500, cube.x + 150));
		} else {
			dot.x = max(100, min(1500, cube.x + (((stage + 1) % 2) * -400) + 200));
		}
		if (lessonDone) {
			dotHeight = 100;
			dot.visible = true;
		}
	}
}

function tutorialStageSetup() {
	savedBads = [];
	savedThorns = [];
	savedEyes = [];
	boxs.destroyEach();
	bads.destroyEach();
	thorns.destroyEach();
	shooters.destroyEach();
	hp = 1000;
	//level set up
	if (lesson == 4) {
		boxes = 1;
		var box = createSprite(200, 272);
		box.setAnimation(ima + "box" + suf);
		box.pause();
		box.depth = 0;
		boxs.add(box);
	}
	if (lesson == 5) {
		boxes = 7;
		for (var i = 0; i < 7; i++) {
			var box1 = createSprite(700, 272 - i * 48);
			box1.setAnimation(ima + "box" + suf);
			box1.pause();
			box1.depth = 0;
			boxs.add(box1);
		}
	}
	if (lesson == 6) {
		boxes = 5;
		boxSetUp(100, 10, false, false, false, false, false);
		boxs.setDepthEach(0);
	}
	if (lesson == 7 || lesson == 18) {
		var groundLevel2 = 272;
		var xpositions2 = [700, 700];
		var ypositions2 = [groundLevel2 - 48 * 6, groundLevel2 - 48 * 7];
		if (lesson == 18) {
			xpositions2 = [700];
			ypositions2 = [groundLevel2 - 48 * 8];
		}
		boxes = xpositions2.length;
		for (var k = 0; k < xpositions2.length; k++) {
			var box3 = createSprite(xpositions2[k], ypositions2[k]);
			box3.setAnimation(ima + "box" + suf);
			box3.pause();
			box3.depth = 0;
			boxs.add(box3);
		}
	}
	if (lesson == 8) {
		var groundLevel3 = 272;
		var xpositions3 = [700, 700, 700];
		var ypositions3 = [groundLevel3 - 48 * 6, groundLevel3 - 48 * 7, groundLevel3 - 48 * 8];
		boxes = xpositions3.length;
		for (var l = 0; l < xpositions3.length; l++) {
			var box4 = createSprite(xpositions3[l], ypositions3[l]);
			box4.setAnimation(ima + "box" + suf);
			box4.pause();
			box4.depth = 0;
			boxs.add(box4);
		}
	}
	if (lesson == 9) {
		var bad = createSprite(cube.x + 300, 272);
		bad.setAnimation(ima + "bad_cube" + suf);
		bads.add(bad);
		bad.pause();
	}
	if (lesson == 10 || lesson == 17) {
		boxes = 3;
		var side = 1;
		if (cube.x > 700) side = -1;
		if (lesson == 10) {
			for (var p = 0; p < 3; p++) {
				var box5 = createSprite(cube.x + 200 * side, 272 - p * 48);
				box5.setAnimation(ima + "box" + suf);
				box5.pause();
				box5.depth = 0;
				boxs.add(box5);
			}
		}
		for (var m = 0; m < 4; m++) {
			var bad1 = createSprite(cube.x + 250 * side + m * 48 * side, 272);
			bad1.setAnimation(ima + "bad_cube" + suf);
			bads.add(bad1);
			bad1.pause();
		}
	}
	if (lesson == 11) {
		var groundLevel4 = 272;
		var xpositions4 = [200, 300, 400, 500];
		var ypositions4 = [272, 272, 130, 100];
		for (var n = 0; n < xpositions4.length; n++) {
			var bad2 = createSprite(xpositions4[n], ypositions4[n]);
			bad2.setAnimation(ima + "bad_cube" + suf);
			bads.add(bad2);
			bad2.pause();
		}
	}
	if (lesson == 12 || lesson == 15 || lesson == 19 || lesson == 20 || lesson == 22 || lesson == 24) {
		var amount = 1;
		if (lesson == 15 || lesson == 24) amount = 3;
		else if (lesson == 19 || lesson == 20 || lesson == 22) amount = 2;
		for (var mi = 0; mi < amount; mi++) {
			var thorn = createSprite(200 + 300 * mi - 1, 272);
			thorn.setAnimation(ima + "tri" + suf);
			thorns.add(thorn);
			thorn.depth = 1.1;
			thorn.pause();
		}
	}
	if (lesson == 13 || lesson == 14 || lesson == 15 || lesson == 20 || lesson == 22 || lesson == 24) {
		tttm = 0;
		var eye = createSprite(cube.x + 100, -50);
		eye.setAnimation(ima + "eye" + suf);
		shooters.add(eye);
		eye.pause();
		shooters.setDepthEach(11);
		hpe = (lesson == 13 || lesson == 22 ? 1 : 3);
		if (lesson == 20) {
			hpe = 2;
		}
	}
	if (lesson == 15) {
		hpe = 3;
		boxes = 5;
		boxSetUp(100, 20, false, false, false, false, true);
		for (var q = 0; q < randomNumber(3, 5); q++) {
			var side1 = (((randomNumber(1, 2) - 1) * 2) - 1); //side of room (past boxes or near wall)
			var bad5 = createSprite(dot.x - side1 * (100 * q), 272);
			bad5.setAnimation(ima + "bad_cube" + suf);
			bads.add(bad5);
			bad5.pause();
		}
		boxs.setDepthEach(0);
	}
	if (lesson == 16) {
		hp = 800;
		boxes = 4;
		for (var ji = 0; ji < 4; ji++) {
			var bonbox = createSprite(100 + 200 * ji, 272);
			bonbox.setAnimation(ima + "box_mystery" + suf);
			bonbox.pause();
			bonbox.depth = 0;
			bonbox.type = "bonus";
			boxs.add(bonbox);
		}
	}
	if (lesson == 17) {
		boxes = 1;
		var bombox = createSprite(500, 272 - 48 * 2);
		bombox.setAnimation(ima + "box_boom" + suf);
		bombox.pause();
		bombox.depth = 0;
		bombox.type = "boom";
		boxs.add(bombox);
	}
	if (lesson >= 18 && lesson <= 22) {
		using = 0;
		curPowers = [];
		if (curPowers.length < 1) curPowers.push(allPowers[lesson - 18]);
	}
	if (lesson == 19 || lesson == 20 || lesson == 22) {
		if (lesson == 19) {
			boxes = 6;
			boxSetUp(100, 10, false, false, false, false, false);
		}
		for (var qu = 0; qu < 5; qu++) {
			var side2 = (((randomNumber(1, 2) - 1) * 2) - 1); //side of room (past boxes or near wall)
			var bad6 = createSprite(dot.x - side2 * (100 * qu), 272);
			bad6.setAnimation(ima + "bad_cube" + suf);
			bads.add(bad6);
			bad6.pause();
		}
		boxs.setDepthEach(0);
	}
	if (lesson == 21) {
		jumps = 0;
		dista = 0;
		quake = 1;
	}
	if (lesson == 23) {
		using = 0;
		curPowers = [];
		boxes = 4;
		for (var jir = 0; jir < 4; jir++) {
			var bufbox = createSprite(100 + 200 * jir, 272);
			bufbox.setAnimation(ima + "box_buff" + suf);
			bufbox.pause();
			bufbox.depth = 0;
			bufbox.type = "buff";
			boxs.add(bufbox);
		}
	}
	if (lesson == 24) {
		hpe = 3;
		boxes = 5;
		boxSetUp(100, 25, true, true, true, false, true);
		for (var eq = 0; eq < randomNumber(3, 5); eq++) {
			var side4 = (((randomNumber(1, 2) - 1) * 2) - 1); //side of room (past boxes or near wall)
			var bad7 = createSprite(dot.x - side4 * (100 * eq), 272);
			bad7.setAnimation(ima + "bad_cube" + suf);
			bads.add(bad7);
			bad7.pause();
		}
		boxs.setDepthEach(0);
	}
	//set the depths before the enemy functions play, or else they'll overlap the text box if it is on them
	boxs.setDepthEach(0.015);
	bads.setDepthEach(0.5);
	thorns.setDepthEach(1.1);
}

function tutorialCheckers() {
	switch (lesson) {
		case 0:
			lessonNeeds(jumps > 0 && dista > 20);
			break;
		case 1:
			lessonNeeds(lwjump > 80);
			break;
		case 2:
			lessonNeeds(shake > 6 && kdown);
			break;
		case 3:
			lessonNeeds(kdown && abs(hspd) >= 12);
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			lessonNeeds(boxes == 0);
			break;
		case 9:
			lessonNeeds(bads.length + savedBads.length == 0);
			break;
		case 10:
			lessonNeeds(bads.length + savedBads.length == 0 && boxes == 0);
			break;
		case 11:
			lessonNeeds(bads.length + savedBads.length == 0);
			break;
		case 12:
			lessonNeeds(thorns.length + savedThorns.length == 0);
			break;
		case 13:
		case 14:
			lessonNeeds(shooters.length + savedEyes.length == 0);
			break;
		case 15:
			lessonNeeds(boxes == 0);
			break;
		case 16:
			lessonNeeds(boxes == 0 && hp > 900);
			break;
		case 17:
			lessonNeeds(boxes == 0 && bads.length + savedBads.length == 0);
			break;
		case 18:
			lessonNeeds(boxes == 0);
			break;
		case 19:
			lessonNeeds(boxes == 0 && bads.length + savedBads.length == 0 && thorns.length + savedThorns.length == 0);
			break;
		case 20:
			lessonNeeds(shooters.length + savedEyes.length == 0 && bads.length + savedBads.length == 0 && thorns.length + savedThorns.length == 0);
			break;
		case 21:
			lessonNeeds(jumps > 0 && dista > 100);
			break;
		case 22:
			lessonNeeds(stun > 0);
			break;
		case 23:
			lessonNeeds(boxes == 0 && curPowers.length == 0);
			break;
		default:
			lessonNeeds(boxes == 0);
			break;
	}
}

function getDirdir() {
	if (lessonDone) {
		if (abs(camera.x - dot.x) > 350) {
			if (dot.x > camera.x) {//dot is to the right
				return 0;
			} else if (dot.x < camera.x) {//dot is to the left
				return 1;
			}
		} else {
			return 2;
		}
	} else {//during a specific lesson, point to area of interest if there is one
		switch (lesson) {//return 0 is point right, return 1 is point left, return 2 is no point
			case 1://walljump stage
				if (cube.x < 335) {
					return 2;
				} else {
					return 1;
				}
				break;
			case 7://mercy skip stages
			case 8:
				return 0;
			case 9://point to only bads stages
			case 10://we will also point to boxes in this stage
			case 11:
			  if (savedBads.length > 0 && bads.length == 0) {
			    if (cube.x < savedBads[0][0]) {
  					return 0;
  				} else if (cube.x > savedBads[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else if (savedBoxes.length > 0 && boxs.length == 0 && lesson == 10) {
			    if (cube.x < savedBoxes[0][0]) {
  					return 0;
  				} else if (cube.x > savedBoxes[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else {
			    return 2;
			  }
			  break;
			case 12: //point to thorns only stage
			  if (savedThorns.length > 0 && thorns.length == 0) {
			    if (cube.x < savedThorns[0][0]) {
  					return 0;
  				} else if (cube.x > savedThorns[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else {
			    return 2;
			  }
			  break;
			case 13://point to shooters only stages
			case 14:
			  if (shooters.length > 0 && abs(shooters.get(0).x - cube.x) > 375) {
    	    if (cube.x < shooters.get(0).x) {
    				return 0;
    			} else if (cube.x > shooters.get(0).x) {
    				return 1;
    			} else {
    				return 2;
          }
			  }
			  break;
			case 19://point to everything stages
			case 20:
			  if (savedBoxes.length > 0 && boxs.length == 0) {
			    if (cube.x < savedBoxes[0][0]) {
  					return 0;
  				} else if (cube.x > savedBoxes[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else if (savedBads.length > 0 && bads.length == 0 && thorns.length == 0) {
			    if (cube.x < savedBads[0][0]) {
  					return 0;
  				} else if (cube.x > savedBads[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else if (savedThorns.length > 0 && thorns.length == 0) {
			    if (cube.x < savedThorns[0][0]) {
  					return 0;
  				} else if (cube.x > savedThorns[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else if (shooters.length > 0 && abs(shooters.get(0).x - cube.x) > 375) {
    	    if (cube.x < shooters.get(0).x) {
    				return 0;
    			} else if (cube.x > shooters.get(0).x) {
    				return 1;
    			} else {
    				return 2;
          }
			  } else {
			    return 2;
			  }
			  break;   
			default: //default is to point to boxes only
			  if (savedBoxes.length > 0 && boxs.length == 0) {
			    if (cube.x < savedBoxes[0][0]) {
  					return 0;
  				} else if (cube.x > savedBoxes[0][0]) {
  					return 1;
  				} else {
  					return 2;
  				}
			  } else {
			    return 2;
			  }
		}
	}
}

/*
      --------------
      MENU VARIABLES
      --------------
*/

//menu stuff
{
	var origin = "notTutorial";
	var canPlay = false; //this becomes true when you have done the tutorial... But not anymore
	var title = createSprite(1000, 35);
	title.setAnimation(ima + "logo");
	title.scale = 0.8;
	title.depth = 100;
	var titleBeat = 1;
	var borders = createGroup();
	var selector = createSprite(1000, 500);
	selector.setAnimation(ima + "cube");
	selector.pause();
	selector.depth = 22;
	var icons = createGroup(); //vault icons
	var iSelector = createSprite(0, 0); //icon selector in vault menu
	iSelector.setAnimation("hitbox");
	iSelector.depth = 24.5;
	iSelector.scale = 1.35;
	iSelector.pause();
	var iSelected = createSprite(0, 0); //icon selected indicator in vault menu
	iSelected.setAnimation("behind_wall");
	iSelected.depth = 25;
	iSelected.scale = 1.35;
	var director = createSprite(-400, 100);//this sprite is used in tutroial to help direct player (arrow appearing at side of screen)
	director.setAnimation(ima + "selector");
	director.depth = 19;
	director.visible = false;

	//navigation variables
	var place = 0; //place 0 is title area, place 1 is main menu select, place 2 is controls, place 3 is settings, place 4 is credits, place 5 is stats, place 6 is vault page, place 7 is highscore page
	var selection = 1; //current selection in that place
	var selections = ["Play", "Tutorial", "Vault", "Stats", "Credits", "Controls/Settings"];
	var ttimer = 0; //transition timer     
	var yelling = 0; //just quit the game
	var movingBack = false; //moving back from side area to main menu
	var choice = 1; //option number in settings place
	var iplace = 0; //vault grid selection placement(this value changes with user input)

	//other variables
	var clicking = false; //doing a clicking animation
	var coll = false; //collapsing rate for visual effects
	var delay = 1; //dleay for collapse to start
	var transing = false; //if during a transition
	var percent = 0; //percent of transition screen covering on way in
	var bpercent = 100; //percent of transition screen covering on way out
	var helptip;
	var byetip;
	var once6 = 1; //sound for transition in
	for (var q = 0; q < selections.length; q++) {
		var border = createSprite(1000, 540 + q * 105);
		border.setAnimation(ima + "border");
		border.depth = 20.1;
		border.pause();
		borders.add(border);
		if (!colour) statsbg.visible = false;
	}
	var theme = ["Normal", "Night", "Vintage", "Winter"];
	var themeNum = 0;
}
/*
      --------------
      MENU FUNCTIONS
      -------------- 
*/

function otherMenuStuff() {
	if (titleBeat < 3600) titleBeat++;
	else titleBeat = 0;
	if (selection >= 3 && selection <= 6) {
		borderbg.visible = true;
		if (place != 3 && place != 7) borderbg.x = 1840;
	} else borderbg.visible = false;
	if (place == 6 && movingBack == false) {
		iSelector.visible = true;
		iSelected.visible = true;
	} else {
		iSelector.visible = false;
		iSelected.visible = false;
	}
	if (place != 6 && icons.length > 0) icons.destroyEach();
}

function titleScreen() {
	if (place == 0) { //title area
		var loadTime = 125;
		//cameraSetup
		camera.x = 1000;
		camera.y = 100;
		if (World.frameCount < loadTime && loadup) { //timer for initial loading - this whole loading area is to deal with the menu music offset when loading the game up for the first time
			if (World.frameCount == loadTime - 1) playSound("sounds/bloquake-menu-soundtrack.mp3", true);
		} else if (!hasFocused) {
			$('.loader').fadeOut(1000);
			//loading designs
			fill("black");
			rect(camera.x - 400, camera.y - 400, 800, 800);
			noStroke();
			textSize(30);
			textFont(myFontNormal);
			textAlign(CENTER, TOP);
			textStyle(BOLD);
			fill("white");
			text("Click anywhere to start", camera.x, camera.y);
			document.getElementById("sketch").style="cursor:pointer";
			if (mouseWentDown("leftButton") || mouseWentDown("rightButton")) {
				hasFocused = true;
			}
		} else {
			document.getElementById("sketch").style="cursor:none";
			aesthetics();
			//pumping title
			title.scale = 0.02 * sin(14.5 * titleBeat) + 0.8;
			director.visible = false;
			//text
			var lemon = 2;
			textStyle(BOLD);
			shakyText("Press Enter", 0, 870 + ((-lemon * 6) * sin(14.5 * titleBeat)), 232, CENTER, 0, "black", "white", 30, 21 + (lemon * sin(14.5 * titleBeat)), myFontNormal);
			write("All Rights Reserved © 2020 Ethan S. Fine (Finesden)", 1000, 400, myFontNormal, CENTER, 22, NORMAL, false);
			//when enter is pressed
			if (ksel && camera.x == 1000) {
				place = 1;
				if (!sMute) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
			}
			if (camera.x == 999) camera.x = 1000; //this is to prevent pressing enter from quit count as the enter input for the title
			pm.visible = false;
		}
	}
}

function mainMenu() {
	if (place == 1 && !transing) {
		if (camera.y < 800) { //smooth diving underground to go see those stats!
			camera.y += csspd * mspd;
			csspd += 0.5;
		} else camera.y = 801;
		if (camera.y == 801) { //when the camera is safely at this y coord, show the stats text drawings
			csspd = 0;
			for (var z = 0; z < selections.length; z++) {
				textStyle(BOLD);
				//the play button will have semi transparent text if you haven't done the tutorial yet
				var colW;
				var colB;
				if (!canPlay && z == 0) colW = (rgb(255, 255, 255, 0.5));
				else colW = "white";
				if (!canPlay && z == 0) colB = (rgb(0, 0, 0, 0.5));
				else colB = "black";
				var panelText = selections[z];
				//write text
				if (!showingBar) {
					if (clicking && z == selection - 1 && delay != 0) shakyText(panelText, 4 + (coll * 2), 992 - (panelText.length * 10), (527 + z * 105), CENTER, 0, colB, colW, 30, 20, myFontNormal);
					else if (clicking && z == selection - 1) shakyText(panelText, 0, 992 - (panelText.length * 10), (527 + z * 105), CENTER, 1, colB, colW, 30, 20, myFontNormal);
					else shakyText(panelText, 0, 992 - (panelText.length * 10), 527 + z * 105, CENTER, 0, colB, colW, 30, 20, myFontNormal);
				}
				textStyle(NORMAL);
			}
			//select selection 
			if (!clicking) {
				if (kwdown) selection++; //move lower on selection list
				if (kwup) selection--; //move higher on selection list
				if (selection > selections.length) selection = 1;
				if (selection < 1) selection = selections.length;
				if ((kwdown || kwup) && (!sMute)) playSound("sounds/Equip-scroll-click.mp3", false);
				selector.visible = true;
				selector.x = 730;
				selector.y = 540 + (selection - 1) * 105;
				if (ksel && !clicking) {
					selector.x += 10;
					if ((selection == 1 && canPlay) || (selection != 1)) {
						clicking = true;
						if (!sMute) playSound("sounds/category_objects/click.mp3", false);
					} else {
						if (!sMute) playSound("sounds/Metal-Bang3-672025076.mp3", false);
					}
				}
			}
		} else selector.visible = false;
		click(730, 1000); //always get ready for click animation (the if statement is inside this function)
	}
}

function infoAreas() {
	//this includes the controls area, and the credits
	if (place == 2 || place == 4 || place == 5) {
		if (camera.x > 1840) camera.x = 1840;
		co = "";
		//text stuff
		var lines;
		if (place == 2) lines = ["Up/W - Jump", "Down/S - quake form", "Right/Left/A/D - move", "Shift - activate power", "Enter - select/confirm", "Arrows - navigate menus", "P/mouse-click - pause", "M - mute music", "N - mute sound"];
		else lines = ["A game by Finesden Studios", "Programmed by Ethan S. Fine", "Art by Ethan S. Fine", "'Nature Cube' ~ B.C. Mix Music", "'Menu Music' ~ Ethan S. Fine", "Sound Effects by Code.org", "Special Thanks to Yoni", "and discord Beta Testers", "Coded in JavaScript,", "using p5.js libraries"]; //in credits
		var allStatsKeys = ["Top Stage", "Games Played", "Achievements", "Boxes Broke", "Hits Taken", "Foes Squashed", "Steps Moved", "Jumps Made", "Quake Rating", "Resets/Skips", "Explosions", "Bonuses", "Power ups"];
		var allStatsValues = [topstage, games, ach, totalBroke, totalHits, totalSquash, floor(totalDista / 48), totalJumps, floor(totalQuake * 10), totalResets, totalExplosions, totalBonuses, totalPowerups];
		
		var xrel = 1840;
		var yrel = 801;
		var title = (place == 2 ? "Controls" : "Bloquake Credits");
		if (place == 5) title = "All-time Stats";
		
		//header
		write(title, xrel, yrel - 225, myFontNormal, CENTER, 25, NORMAL, false);
		
		//info
		var yspacing;
		if (place == 2) {
			textSize(textScale * 30);
			yspacing = 40;
		} else if (place == 4) {
			textSize(textScale * 25);
			yspacing = 37;
			drop = 1.6;
		} else if (place == 5) {
			textSize(textScale * 24);
			yspacing = 30;
			drop = 1.6;
		}

		//contents text
		if (place != 5) { //normal one coloumn format for credits and controls
			for (var i = 0; i < lines.length; i++) {
				write(lines[i], xrel, yrel - 170 + i * yspacing, myFontNormal, CENTER, 30, BOLD, true);
			}
		} else { //double coloumn format for stats
			for (var j = 0; j < allStatsKeys.length; j++) {
				write(allStatsKeys[j], xrel - 230, yrel - 180 + j * yspacing, myFontNormal, LEFT, 30, BOLD, true);
				write(allStatsValues[j], xrel + 230, yrel - 180 + j * yspacing, myFontNormal, RIGHT, 30, BOLD, true);
			}
		}

		//footer
		textSize(textScale * 30);
		textAlign(CENTER, TOP);
		var footer = "Press Enter to go to Settings";
		if (place == 5) {
			footer = "Press Enter to go to Highscores";
		}
		if (place == 4) {
			footer = "Press Enter to go to Menu";
		}
		write(footer, xrel, yrel + 220, myFontNormal, CENTER, 25, NORMAL, false);

		//move to settings page from controls page
		if (ksel && !movingBack) {
			if (!sMute) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
			if (place == 2) place = 3;
			if (place == 4) movingBack = true;
			if (place == 5) place = 7;
		}
	}
}

function settingsPlace() {
	//settings place or highscore place transition in
	if ((place == 3 || place == 7) && ((borderbg.x != 1840.5 && borderbg.y >= 805) || (borderbg.x == 1840.5 && borderbg.y < 805))) { //it would have been at x = 1840 at this point, but after transition, it will be set to 1840.5 so the code, not you, will recognize
		//make border box fall
		borderbg.y += 40 * mspd;
		//when it goes off screen
		if (borderbg.y > 2000) {
			borderbg.y = -100;
			borderbg.x = 1840.5;
		}
		if (borderbg.x == 1840.5 && borderbg.y > 805) borderbg.y = 805;
	}


	//Display Setting and settings functionalities
	if ((place == 3 || place == 7) && borderbg.x == 1840.5 && borderbg.y == 805) {
		//text stuff
		var lines = ["Use costumes - " + costumes, "Show clouds - " + cloudShow, "Show grass - " + grassShow, "Screen shake - " + shakable, "Animations - " + animate, "Show speed bar - " + speedBarShow,"Show director - " + showDirections, "Theme - " + theme[themeNum], "Faster menu - " + fastMenu, "-Return to menu-"];
		var xrel = 1840;
		var yrel = 801;
		
		//header
		var title = (place == 3 ? "Settings" : "Highscores");
		write(title, xrel, yrel - 225, myFontNormal, CENTER, 25, NORMAL, false);
		
		//info
		//Stats key name (displayed on left)
		var yspacing = (place == 3 ? 37 : 37);
		if (place == 3) {
			for (var i = 0; i < lines.length; i++) {
				write(lines[i], xrel, yrel - 175 + i * yspacing, myFontNormal, CENTER, 30, BOLD, true);
			}
		} else {
			for (var j = 0; j < highscores.length; j++) {
				write(j + 1 + ".", xrel - 230, yrel - 180 + j * yspacing, myFontNormal, LEFT, 30, BOLD, true);
				write(highscores[j], xrel + 230, yrel - 180 + j * yspacing, myFontNormal, RIGHT, 30, BOLD, true);
			}
		}

		//footer
		var footer = (place == 3 ? "Press Enter to Change Setting" : "Press Enter to go to Menu");
		write(footer, xrel, yrel + 220, myFontNormal, CENTER, 25, BOLD, false);

		if (place == 3 && !movingBack) {
			//selection navigation
			arrow.x = 1640;
			arrow.y = 600 + choice * yspacing;
			if (kwdown) {
				choice++; //move lower on selection list
			}
			if (kwup) {
				choice--; //move higher on selection list
			}
			if (choice > lines.length) {
				choice = 1;
			}
			if (choice < 1) {
				choice = lines.length;
			}
			if ((kwdown || kwup) && (!sMute)) {
				playSound("sounds/Equip-scroll-click.mp3", false);
			}
			//select choice
			if (ksel) {
				arrow.x += 10;
				if (!sMute) playSound("sounds/category_objects/click.mp3");
				//change selected option's corresponding variable
				switch (choice) {
					case 1:
						costumes = !costumes;
						cube.setAnimation(ima + "cube");
						selector.setAnimation(ima + "cube");
						cube.pause();
						selector.pause();
						break;
					case 2:
						cloudShow = !cloudShow;
						break;
					case 3:
						grassShow = !grassShow;
						break;
					case 4:
						shakable = !shakable;
						break;
					case 5:
						animate = !animate;
						break;
					case 6:
						speedBarShow = !speedBarShow;
						break;
					case 7:
						showDirections = !showDirections;
						break;
					case 8:
						if (themeNum < theme.length - 1) {
							themeNum++;
						} else themeNum = 0;
						switch (themeNum) {
							case 1:
								colouring(false, true, false); //night
								break;
							case 2:
								colouring(true, false, false); //vintage
								break;
							case 3:
								colouring(false, false, true); //winter
								break;
							default:
								colouring(false, false, false); //normal
								break;
						}
						break;
					case 9:
						fastMenu = !fastMenu;
						if (fastMenu) {
							mspd = 4;
						} else mspd = 1;
						break;
					default:
						movingBack = true;
						break;
					}
				}
			}
			if (place == 7 && ksel) {
				movingBack = true;
			}
		}
}

function vault() {
	if (place == 6) {
		if (camera.x > 1840) camera.x = 1840;
		var xrel = 1840;
		var yrel = 801;
		
		//vault icon grid set up
		var spacing = 64;
		var xOffset = -203.75;
		var yOffset = -125;
		var maxItemsPerRow = 7;

		//icons set up visual
		if (icons.length == 0) { //only do the set up if you're in place 6 and there are currently no icons
			for (var i = 0; i < skins.length; i++) {
				var icon = createSprite(xrel + xOffset + i * spacing - (floor(i / maxItemsPerRow)) * spacing * maxItemsPerRow, yrel + yOffset + (floor(i / maxItemsPerRow)) * spacing); //this formula sets up a grid 
				var look = skins[i];
				if (costumes && colour) {
					icon.setAnimation(ima + "cube" + look);
				} else {
					icon.setAnimation(ima + "cube");
				}
				icon.scale = 1.1;
				icon.depth = 26;
				icon.pause();
				
				if (!unlocked[i]) {
					icon.tint = "rgb(71, 60, 42)"; //locked costumes will be darker
					if (i > skins.length - 3) {
						icon.tint = "rgb(0,0,0)";
						//the two secret ones at the end will be black, so you can't see them
					}
				}
				icons.add(icon);
			}

		}

		//grid selection system
		//grid navigation
		if (kwright && ((iplace + 1) % maxItemsPerRow != 0)) {
			iplace++;
		} else if (kwright) {
			iplace -= maxItemsPerRow - 1;
		}
		if (kwleft && (iplace % maxItemsPerRow)) {
			iplace--;
		} else if (kwleft) {
			iplace += maxItemsPerRow - 1;
		}
		if (kwup && iplace > maxItemsPerRow - 1) {
			iplace -= maxItemsPerRow;
		} else if (kwup) {
			iplace += maxItemsPerRow * (skins.length / maxItemsPerRow - 1);
		}
		if (kwdown && iplace < skins.length - maxItemsPerRow) {
			iplace += maxItemsPerRow;
		} else if (kwdown) {
			iplace -= maxItemsPerRow * (skins.length / maxItemsPerRow - 1);
		}
		if ((kwup || kwdown || kwleft || kwright) && !sMute) playSound("sounds/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
		//selector placement
		iSelector.x = xrel + xOffset + iplace * spacing - (floor(iplace / maxItemsPerRow)) * spacing * maxItemsPerRow;
		iSelector.y = yrel + yOffset + (floor(iplace / maxItemsPerRow)) * spacing;

		var nameSize = 24;
		//selecting - press shift
		if (!kuse && icons.length > 0) {
			iSelector.setFrame(0);
		} else if (kuse) { //select the costume
			iSelector.setFrame(1);
			if (!sMute) playSound("sounds/category_objects/click.mp3");
			//selection application
			if (costumes && colour && unlocked[iplace]) { //you must have unlocked it to select it
				skin = iplace;
				cube.setAnimation(ima + "cube" + skins[skin]);
				selector.setAnimation(ima + "cube" + skins[skin]);
				cube.pause();
				selector.pause();
			} else if (!unlocked[iplace]) {
				nameSize = 27;
			}
		}
		iSelected.x = xrel + xOffset + skin * spacing - (floor(skin / maxItemsPerRow)) * spacing * maxItemsPerRow;
		iSelected.y = yrel + yOffset + (floor(skin / maxItemsPerRow)) * spacing;

		//back to menu
		if (ksel) movingBack = true;

		//page text
		var title = "";

		//achievement name
		var styl = BOLD;
		if (unlocked[iplace]) {
			title = achNames[iplace];
			styl = ITALIC;
		} else {
			styl = BOLD;
			title = "Locked";
		}
		textAlign(CENTER, TOP);
		write('"' + title + '"', xrel, yrel - 230, myFontNormal, CENTER, nameSize, styl, true);

		//achievement goal
		title = achGoals[iplace];
		var opaque;
		if (unlocked[iplace]) {
			opaque = true;
		} else {
			opaque = false;
		}
		write(title, xrel, yrel - 195, myFontNormal, CENTER, 20, BOLD, opaque);

		//footer
		var footer = "Press Shift to select costume";
		write(footer, xrel, yrel + 233, myFontNormal, CENTER, 25, BOLD, false);
	}

}

function backToMenu() {
	if (!sMute && camera.x == 1840) playSound("sounds/Button-Menu-Hard-Click.mp3", false);
	//reset main menu stuff
	clicking = false;
	delay = 1;
	borders.get(selection - 1).setFrame(0);
	camera.x -= 40 * mspd;
	statsbg.x = camera.x;
	if (camera.x < 1000) {
		camera.x = 1000;
		statsbg.x = 1000;
		movingBack = false;
		place = 1;
		arrow.visible = false;
	}
}

function click(cursor, ploc) { //cursor is x location of selector in that place, ploc is panel's x location
	if (clicking) {
		if (selector.x > cursor && coll < 10) selector.x -= 5; //set back cursor
		if (!fastMenu) {
			if (delay == 0 && coll < 10) coll++;
			//panel shrinking and shaking
			for (var i = 0; i < borders.length; i++) {
				var panel = borders.get(i);
				//panel shaking and delay management
				panel.x = ploc; //this undoes what the shaking offset does
				if (!transing) camera.x = ploc;
				if (i == selection - 1) {
					var maxdelay = 7;
					if (delay == 1) {
						//playSound("sounds/Metal-Bang3-672025076.mp3",false);
						if (!sMute) playSound("sounds/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
					}
					if (delay < maxdelay && delay != 0) {
						delay++;
						panel.x += (((delay % 2) * 2) - 1) * (maxdelay - delay) * 2; //this will cause opposite direction at each consecutive number
					}
					if (delay == maxdelay) delay = 0;
				}
			}
			//fade away
			if (delay == 0 && coll < 6) borders.get(selection - 1).setFrame(coll);
		} else coll = 10;
		//selector moving along and camera moving to new area of menu
		if (coll == 10) {
			selector.x = (selection == 1 || selection == 2) ? selector.x + 40 * mspd : selector.x - 40 * mspd;
			if (selection >= 3 && selection <= 6) { //camera and bg following for sub menu places
				camera.x = abs((selector.x + (ploc - cursor)) - 1000) + 1000;
				statsbg.x = camera.x;
			}
			delay = 0;
		}
		//selections functionality
		var target = camera.x + 600;
		var thing = selector.x;
		if (selection >= 3 && selection <= 6) {
			target = 1800;
			thing = camera.x;
		}
		if (thing > target) { //once cube reaches that area apply the selection's functionality
			if (selection == 1 || selection == 2) {
				transing = true;
				if (selection == 2) inTutorial = true;
			} else if (selection == 3) place = 6; //vault
			else if (selection == 4) place = 5; //stats
			else if (selection == 5) place = 4; //credits
			else if (selection == 6) place = 2; //controls
			else clicking = false;
		}
	} else {
		coll = 0;
	}
}

function transition() {
	if (transing && !pause) {
		//sounds
		if (once6 == 1) {
			if (!sMute) playSound("sounds/category_transition/time_freeze.mp3", false);
			once6 = 0;
		}
		if (bpercent == 100 && ttimer == 0 && percent == 99) {
			if (!sMute) playSound("sounds/category_transition/unfreeze.mp3", false);
		}
		if (percent != 100) { //do this before the two black squares fully close
			if (inTutorial) {
				helptip = randomNumber(0, tutorTips.length - 1);
				byetip = randomNumber(0, tutorBye.length - 1);
				origin = "Tutorial";
			} else {
				helptip = randomNumber(0, tips.length - 1);
				byetip = randomNumber(0, bye.length - 1);
				origin = "notTutorial";
			}
			ttimer = 100 / mspd;
			showingBar = 0;
		}
		//black square transition
		if (percent == 99) { //going out
			bpercent = max(bpercent / 1.2, 1);
			fill("black");
			//This ends the transition
			boxy.x = camera.x - 300;
			st.x = camera.x - 300;
			if (bpercent <= 1) {
				bpercent = 0;
				if (playing == false && transing) {
					onSwitch(1);
					transing = false;
				}
				if (playing == true && transing) { //this is setup this way so that the onSwitch 1 wont make playing true and then run this right after
					onSwitch(0);
					transing = false;
				}
			}
			if (transing) {
				rect(camera.x - 500, camera.y + 340, 1000, -min(10 * bpercent, 500));
				rect(camera.x - 500, camera.y - 350, 1000, min(10 * bpercent, 500));
			}
		} else { //going in
			fill("black");
			if (percent < 100) percent = max(percent * 1.4, 1);
			if (percent > 100) percent = 100;
			rect(camera.x - 500, camera.y + 340, 1000, -min(10 * percent, 500));
			rect(camera.x - 500, camera.y - 350, 1000, min(10 * percent, 500));
		}
		//loading screen text
		if (percent == 100) { //loading screen
			rect(camera.x - 800, camera.y - 800, 1600, 1600);
			var spacing = 15;
			shakyText("Saving...", 2, camera.x - 330, camera.y + 300, LEFT, 0, "black", "white", 20, spacing, myFontNormal); //helpful tip or comment
			textAlign(CENTER, TOP);
			textFont(myFontNormal);
			textSize(textScale * 25);
			textStyle(NORMAL);
			if (suf == "" && colour) fill("yellow");
			if (suf == "_night" || suf == "_snow") fill("aqua");
			if (!colour) fill("white");
			if (origin == "Tutorial") { //splash text varies depending on where you're coming from or where you're going
				if (!playing) text(tutorTips[helptip], camera.x, camera.y);
				else {
					text(tutorBye[byetip], camera.x, camera.y);
					achBar.visible = false;
				}
			} else {
				if (!playing) text(tips[helptip], camera.x, camera.y);
				else {
					text(bye[byetip], camera.x, camera.y);
					achBar.visible = false;
				}
			}
			if (ttimer > 0) ttimer--;
			else percent--;

			//get ready in position for transition out depending on place
			if (clicking) { //from menu
				camera.y = 106.5;
				camera.x = 600;
				title.visible = false;
				borders.destroyEach();
				//gui sprites vanishing
				lives.setVisibleEach(true);
				boxy.visible = true;
				st.visible = true;
				bar.visible = true;
				slots.setVisibleEach(true);
				for (var i = 0; i < lives.length; i++) {
					var lif = lives.get(i); //the first of the group is the farthest to the right
					lif.x = -110 + camera.x + 55 * i - 600;
				}
			}
			if (playing) {
				camera.y = 100;
				camera.x = 1000;
				//gui sprites vanishing
				lives.setVisibleEach(false);
				boxy.visible = false;
				st.visible = false;
				bar.visible = false;
				slots.setVisibleEach(false);
				pm.visible = false;
				arrow.visible = false;
				restartGame();
				if (inTutorial) inTutorial = false; //this is where you officially leave the tutorial
				title.visible = true;
			}
			stopSound("sounds/bloquake-menu-soundtrack.mp3");
			stopSound("sounds/Nature-Cube-Bloquake-OST.mp3");
			stopSound("sounds/Nature-Cube-Night-Theme-Bloquake-OST.mp3");
			stopSound("sounds/Nature-Cube-Vintage.mp3");
			//if they were clicking then stop the clicking cycle
			clicking = false;
			if (!colour) statsbg.visible = true;
		}

	} else {
		percent = 0;
		bpercent = 100;
		once6 = 1;
	}
}

function onSwitch(mode) { //when switching from ingame to menu do this once
	if (mode == 0) { //FROM GAME to menu
		willpause = false;
		cube.pause();
		pm.visible = false;
		playing = false;
		place = 0;
		camera.x = 999;
		statsbg.x = 1000;
		//hide gui stuff
		for (var i = 0; i < lives.length; i++) {
			var lif = lives.get(i); //the first of the group is the farthest to the right
			lif.x = -110 + camera.x + 55 * i - 600;
		}
		title.visible = true;
		//recreate selections
		for (var q = 0; q < selections.length; q++) {
			var border = createSprite(1000, 540 + q * 105);
			border.setAnimation(ima + "border" + suf);
			border.depth = 20.1;
			border.pause();
			borders.add(border);
			if (!colour) statsbg.visible = false;
		}
		playSound("sounds/bloquake-menu-soundtrack.mp3", true);
		//save game variables into localStorage
		saveGame();
	}
	if (mode == 1) { //FROM MENU to game
		delay = 1;
		camera.x = 600;
		camera.y = 106.5;
		if (themeNum == 0 || themeNum == 3) {
			playSound("sounds/Nature-Cube-Bloquake-OST.mp3", true); //music thanks to of BC mix music and Me, Finesden
		} else if (themeNum == 1) {
			playSound("sounds/Nature-Cube-Night-Theme-Bloquake-OST.mp3", true); //music thanks to of BC mix music
		} else {
			playSound("sounds/Nature-Cube-Vintage.mp3", true);
		}
		playing = true;
		title.visible = false;
		borders.destroyEach();
		selector.visible = false;
		borderbg.visible = true;
		if (!colour) statsbg.visible = true;
		if (!inTutorial) games++;
		//save menu variables into localStorage
		saveGame();
	}
}

function colouring(vintage, night, winter) {
	if (vintage) {
		ima = "";
		colour = false;
	} else {
		ima = "c_";
		colour = true;
	}
	if (night) suf = "_night";
	else if (winter) suf = "_snow";
	else suf = "";
	var cubeLook = "";
	if (colour) cubeLook = skins[skin];
	cube.setAnimation(ima + "cube" + cubeLook);
	cube.pause();
	leftcorner.setAnimation(ima + "corner_piece_left" + suf);
	dot.setAnimation(ima + "dot" + suf);
	secret.setAnimation(ima + "secret");
	plants.setDepthEach(7.5);
	sky.setDepthEach(0.5);
	boxy.setAnimation(ima + "box_gui" + suf);
	st.setAnimation(ima + "stage_s" + suf);
	bar.setAnimation(ima + "bar" + suf);
	bar.pause();
	statsbg.setAnimation(ima + "wall_paper_dirt" + suf);
	borderbg.setAnimation(ima + "borderbox" + suf);
	if (vintage) statsbg.visible = false;
	else statsbg.visible = true;
	pm.setAnimation(ima + "pause_menu" + suf);
	arrow.setAnimation(ima + "selector" + suf);
	director.setAnimation(ima + "selector" + suf);
	speaker.setAnimation(ima + "sound" + suf);
	note.setAnimation(ima + "music" + suf);
	selector.setAnimation(ima + "cube" + cubeLook);
	selector.pause();
	achBar.setAnimation(ima + "border_long" + suf);
	title.setAnimation(ima + "logo" + suf);
	for (var g = 0; g < borders.length; g++) {
		var border = borders.get(g);
		border.setAnimation(ima + "border" + suf);
		border.pause();
		border.setFrame(0);
	}
	for (var h = 0; h < plants.length; h++) {
		var patch = plants.get(h);
		patch.setAnimation(ima + "grass" + suf);
	}
	var squid = randomNumber(-200,-50);
	for (var i = 0; i < sky.length; i++) {
		var puff = sky.get(i);
		puff.setAnimation(ima + "cloud" + suf);
		if (themeNum != 3) {
			squid += randomNumber(250,350);
			puff.x = squid;
			puff.y = randomNumber(-70, -150);
		} else {
			//set y
			if (i == 0 || i % 2 == 0) {
				puff.y = 200;
			} else {
				puff.y = 200 - puff.height;
			}
			//set x
			if (i == 0 || i == 1) {
				puff.x = 200;
			} else if (i == 2 || i == 3) {
				puff.x = 200 + puff.width;
			} else if (i == 4 || i == 5) {
				puff.x = 200 + puff.width*2;
			} else if (i == 6 || i == 7) {
				puff.x = 200 + puff.width*3;
			}
		}
	}
	for (var j = 0; j < tops.length; j++) {
		var top = tops.get(j);
		top.setAnimation(ima + "floor_topping" + suf);
	}
	for (var k = 0; k < floors.length; k++) {
		var floorr = floors.get(k);
		floorr.setAnimation(ima + "floor_piece" + suf);
	}
	for (var l = 0; l < unders.length; l++) {
		var under = unders.get(l);
		under.setAnimation(ima + "under_floor" + suf);
	}
	for (var m = 0; m < walls.length; m++) {
		var wall = walls.get(m);
		wall.setAnimation(ima + "wall_left" + suf);
	}
	for (var n = 0; n < bwalls.length; n++) {
		var bwall = bwalls.get(n);
		bwall.setAnimation(ima + "behind_wall" + suf);
	}
}

{
	//costume and vault arrays
	var skins = ["", "_ruby", "_emerald", "_gold", "_copper", "_charcoal", "_amythest", "_pink", "_face", "_eye", "_quad", "_goggles", "_cool", "_chief", "_box", "_darkbox", "_dice", "_broken", "_thorn", "_bc", "_bcb", "_evileye", "_rnb", "_spiral", "_man", "_star", "_anvil", "_heart", "_gory", "_geo", "_3d", "_tophat", "_col", "_angry", "_excite", "_cute", "_shock", "_crazy", "_mon", "_spooky", "_smiley", "_pepper"];
	var unlocked = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

	//helpful or not so helpful game tips text
	var tips = ["The tallest stacks are 8 boxes tall", "Kill the Evil Eye at the start of each stage", "Wall jump at the evil eye!", "You don't get points for exploding enemies", "Be careful out there...", "Good luck.", "Use your power ups wisely", "Lure enemies towards the left wall", "The boxes are crunchy.", "Try to blow up the Evil Eye", "Have fun playing Bloquake!", "Press shift to use or lose you power up!", "Time to smash some shapes!", "Bonus boxes give 25 to 100 hp", "Don't forget to check your in game stats", "You are the Nature Cube...", "...Secrets?", "Try not to leave too many boxes in the air", "Tap the down key in middair for controlled jumps", "Quake a leg!", "Too far to the right?", "No! I worked hard making those boxes!", "They say: Take a break every once in a while", "Get the Bad Cubes to block the fireballs!", "<Insert Text> :)", "Pro Tip: Smash by holding Down", "I bet you can't get a score of exactly 1 million", "No palm trees?", "You could be doing something else now", "What if you're actually the bad guy?", "Smash Thorn-Heads from the side", "What if the Bad Cubes are the good guys?", "Dodge those fireballs!", "Stage 50 = real pro", "Now where did I put my boxes...", "Shake the grass, Quake the grass", "Collect all the costumes!", "I smell peppers.....", "Bloquake, originally called Block Smasher", "Ready, set, go!", "I heard there's a vintage mode", "Confidence! Patience! Precision!", "There are 5 different power ups", "Thank you Kongregate!", "Hide in side box stacks for coverage!","Thorn Heads don't like boxes","The dot gives you at least 2 hearts","'bloquer-tremblement'"];
	var bye = ["Sorry, I don't know what to say.", "Did you have fun?", "Why not try the Night theme?", "Go check your highscores via the stats page", "Be sure to choose your costume", "Did you pay attention during the tutorial?", "Did you know there's a winter theme?", "Which power up is your favorite?", "Did you find the ___?", "<Failed to insert text>", "Think about all the poor enemies you crushed", "That was a lot of boxes", "Did you beat your record?", "Don't let it get you down", "Don't give up", "Maybe take a break now", "<Insert 'I know what you're thinking' kind of text>", "You gave it your all, and that's what matters", "Finesden was here", "Have fun playing in the menu!", "The Thorn-Heads send you their regards", "They say the quit messages are less helpful", "But the Evil Eye wanted to shoot you even more!", "Where do you think you're going?", "Of course there are secrets...right?", "Goodbye!", "There's nothing loading right now", "*Awkward silence...*", "Yeah, there's no winning, only losing", "Don't worry, you can still play again!", "Go check the vault for unlocked costumes", "Be sure to see the credits!", "Going to adjust the settings?", "This text fits exactly in the space which is provided", "The code, not I, knows how well you did", "2020, anyone?", "This may take a while :)", "So long, friend.", "Come on, you can do better than that", "The boxes had a break, so now you will too", "I'm just a string in an array...","There's a secret in the air", "There are 41 achievements"];
	var tutorTips = ["Get ready to learn", "Reset is not the same as Restart", "You won't regret coming here", "Did you come here after failing in the game?", "There are 25 lessons in this Tutorial", "Remember, press P to pause.", "The tutorial rewards you with knowledge!", "Who in the world is Blocky?", "Thank you for coming here!", "Try playing the Tutorial in Night theme!", "Use the lessons page to select a lesson"];
	var tutorBye = ["Returning to the main menu...", "The more you know the less you know.", "Any more questions?", "Say goodbye to Blocky!", "Help! I realized I'm just a bunch of words!", "Was the tutorial fun?", "Did you learn anything?", "Now you can go play the real deal", "Why would I ask you a question?", "Yay! Now you know things!", "The tutorial doesn't make you an expert."];
	bye.push("There's a 1/" + (bye.length + 1) + " chance in getting this message");
}
/*
      ----------------
        ACHIEVEMENTS
      ----------------
*/
{
	//camera man
	var cammy = createSprite(camera.x, camera.y);
	cammy.setAnimation("INVISIBLE");
	//achievement managing variables 
	var showingBar = 0;
	var showTime = 100;
	var achShowed = 0; //the current achievment being showed
	var achBar = createSprite(camera.x, 600);
	var notifyImage = createSprite(camera.x, 600);
	notifyImage.depth = 101;
	achBar.setAnimation(ima + "border_long" + suf);
	achBar.depth = 100;
	achBar.pause();
	var powersHad = [false, false, false, false, false];
	var eyeExists = true;
	var thornsTotal = 0; //total number of thorn heads killed
	var eyesTotal = 0; //total number of evil eyes killed
	var badsTotal = 0; //total number of bad cubes killed
	var idleTimer = 0; //count how long you idle
}

function resetAchCounts() {
	powersHad = [false, false, false, false, false];
	eyeExists = true;
	idleTimer = 0;
}

function achUnlock(num) {
	if ((unlocked[num] == false || num == 42) && !transing && quake > 0.01) { //check if you already unlocked it or not, also checks if first game begun, this is to prevent and issue which causes the "play one game" achevement to not ease in
		if (showingBar == 0) { //this makes it so if more than one achievement is unlocked at once, they'll take turns notifying you
			showingBar = showTime; //show the achievement bar which appears on screen to notify
			unlocked[num] = true;
			achShowed = num; //so the notification knows what to display
			if (!sMute) {
				playSound("sounds/category_transition/puzzle_game_upgrade_01.mp3", false);
				playSound("sounds/category_achievements/bubbly_game_achievement_sound.mp3", false);
			}
			saveGame();//save game whenever you get an achievement
		}
	}
}

function achievementWatchers() {
	//Use all of the power ups in one game
	switch (buff) {
		case "thornArmor":
			powersHad[0] = true;
			break;
		case "gigaCube":
			powersHad[1] = true;
			break;
		case "superKinetic":
			powersHad[2] = true;
			break;
		case "quakeStun":
			powersHad[3] = true;
			break;
		case "tripleJump":
			powersHad[4] = true;
			break;
		default:
			//nothing
			break;
	}
	if (powersHad[0] && powersHad[1] && powersHad[2] && powersHad[3] && powersHad[4]) {
		achUnlock(1);
	}
	//Have 10 Thorn-Heads present at once
	if (thorns.length + savedThorns.length >= 10) achUnlock(2);
	//don't destroy an evil eye before stage 30
	if (stage >= 10 && shooters.length < 1) eyeExists = false;
	if (stage >= 30 && eyeExists) achUnlock(4);
	//Destroy a total of 2,000 foes
	if (totalSquash + squash >= 2000) achUnlock(5);
	//Move 10,000 steps in total
	if (floor(totalDista / 48) + floor(dista / 48) >= 10000) achUnlock(6);
	//Have 10 bad cubes present on stage 10
	if (stage == 10 && bads.length == 10) achUnlock(7);
	//play 1 game
	if (games >= 1) achUnlock(8);
	//play 10 games
	if (games >= 10) achUnlock(9);
	//play 50 games
	if (games >= 50) achUnlock(10);
	//Get a score of over 500,000
	if (floor(score * 100) > 500000) achUnlock(11);
	//Get a score of over 1,000,000
	if (floor(score * 100) > 1000000) achUnlock(12);
	//Get a score of over 2,500,000
	if (floor(score * 100) > 2500000) achUnlock(13);
	//Break a total of 1000 boxes
	if (totalBroke + broke >= 1000) achUnlock(14);
	//Break 100 boxes before stage 10
	if (broke >= 100 && stage < 10) achUnlock(15);
	//Have 50 boxes remaining
	if (boxes == 50) achUnlock(16);
	//Break a total of 10,000 boxes
	if (totalBroke + broke >= 10000) achUnlock(17);
	//Destroy 100 Thorn-Heads in total
	if (thornsTotal >= 100) achUnlock(18);
	//Destroy 1000 Bad Cubes in total 
	if (badsTotal >= 1000) achUnlock(19);
	//Destroy 100 foes before stage 20
	if (squash >= 100 && stage < 20) achUnlock(20);
	//Destroy 50 Evil Eyes in total
	if (eyesTotal >= 50) achUnlock(21);
	//Reach stage 15
	if (stage >= 15) achUnlock(22);
	//Reach stage 30
	if (stage >= 30) achUnlock(23);
	//Reach stage 45
	if (stage >= 45) achUnlock(24);
	//Reach stage 60
	if (stage >= 60) achUnlock(25);
	//Reach a total quake rating of 2,500
	if (floor(totalQuake * 10) + floor(quake * 10) >= 2500) achUnlock(26);
	//Reach stage 15 without getting hit
	if (stage >= 15 && hits == 0) achUnlock(27);
	//Get hit a total of 1000 times
	if (totalHits + hits >= 1000) achUnlock(28);
	//Jump 1000 times in total
	if (totalJumps + jumps >= 1000) achUnlock(29);
	//Just sit and wait
	if (!unlocked[30]) {
		if (playing && !pause && !willpause && !kleft && !kright && !kjump && !kdown && !kuse) idleTimer++;
		else idleTimer = 0;
	}
	if (idleTimer >= 2000) achUnlock(30);
	//How high can you go?
	if (maxht < -950) achUnlock(31); //to do this you need to have 3 triplejump powers ready, then go far to the right and start climbing up the wall whilst refreshing power when necessary
	//Break 200 buff boxes
	if (totalPowerups + powerups >= 200) achUnlock(32);
	//Break 200 boom boxes
	if (totalExplosions + explosions >= 200) achUnlock(33);
	//Break 200 bonus boxes
	if (totalBonuses + bonuses >= 200) achUnlock(34);
	//Reach stage 20 without using a power up
	if (stage >= 20 && !powersHad[0] && !powersHad[1] && !powersHad[2] && !powersHad[3] && !powersHad[4]) achUnlock(35);
	//Reach stage 35 without going far to the right
	if (stage >= 35 && resets == 0) achUnlock(36);
	//Get game over on stage 1
	if (stage == 1 && hp <= 0) achUnlock(37);
	//Have 20 foes present at once
	if (bads.length + thorns.length + shooters.length + savedBads.length + savedThorns.length >= 20) achUnlock(38);
} 
{
	//what you have to do to earn achievement - the index number of each one corresponds to it's icon's index in the skins array
	var achGoals = ["Default", "Use all of the power ups in one game", "Have 10 Thorn-Heads present at once", "Complete the tutorial", "Don't destroy the evil eye before stage 30", "Destroy a total of 2,000 foes", "Move 10,000 steps in total", "Have 10 bad cubes present on stage 10", "Play 1 game", "Play 10 games", "Play 50 games", "Get a score of over 500,000", "Get a score of over 1,000,000", "Get a score of over 2,500,000", "Break a total of 1,000 boxes", "Break 100 boxes before stage 10", "Have 50 boxes remaining", "Break a total of 10,000 boxes", "Destroy 100 Thorn-Heads in total", "Destroy 1000 Bad Cubes in total", "Destroy 100 foes before stage 20", "Destroy 50 Evil Eyes in total", "Reach stage 15", "Reach stage 30", "Reach stage 45", "Reach stage 60", "Reach a total quake rating of 2,500", "Reach stage 15 without getting hit", "Get hit a total of 1,000 times", "Jump 1,000 times in total", "Just sit and wait", "How high can you go?", "Break 200 buff boxes total", "Break 200 boom boxes total", "Break 200 bonus boxes total", "Reach stage 20 without using a power up", "Reach stage 35 without resetting", "Get game over on stage 1", "Have 20 foes present at once", "Destroy an Evil Eye past stage 29", ":)", "???", "You've reached stage 100!"];
	//the name of the achievement (this is just for fun)
	var achNames = ["The starter costume", "You have the power within", "Overgrown", "You got schooled!", "Eye'll show you mercy", "Heart of coal", "Marathon slider", "That's oddly specific", "New beginnings", "One of the usuals", "Veteran player", "You get the point", "Millionaire", "Score grinder", "I think you need a break", "Practice makes perfect", "Lucky stacks", "Broken to bits", "A real thorn in the side", "Maybe you're the bad cube?", "Psychocube", "Eye'll show you suffering", "Novice", "Advanced", "Expert", "Master", "Bloquake? More like earthquake", "Untouchable", "Punching bag", "Geometry Jump", "Remember: press 'p' to pause", "The sky's the unlimited", "I... feel... POWERFUL", "KABOOM!", "Health & Wealth", "Staying true to form", "No flying boxes, thank you", "Seriously? That's silly", "Monster party!", "Levitating fireball shooting eyeball", "Never hide your smile", "A spicy surprise!", "You're an absolute mad-lad."];
}
/*
Stage 
  --die on stage 1 (crazy) 
  --make it to stage 15 (red n blue)
  --stage 30 (spiral)
  --stage 45 (man)
  --stage 60 (star)
Score 
  --score of 500,000 in a game (goggles)
  --score 1,000,000 in a game (cool)
  --score 2,500,000 in a game (chief)
  --beat the tutorial (gold)
Keeping enemies 
  --have 10 bad cubes present on stage 10 (pink)
  --don't kill the evil eye before stage 30 (copper) 
  --have 10 thorn heads present at once (emerald) 
  --have 20 enemies present once (monster)
Killing enemies 
  --Kill 1000 bad cubes total (bad cube)
  --Kill 50 evil eyes total (evil eye)
  --kill 100 thorn heads total (thorn)
  --kill 2000 enemies total (charcoal) 
  --kill 100 enemies before stage 20 (black bad cube)
Boxes 
  --Break 1000 boxes total(box) 
  --break 10,000 boxes total (broken)
  --break 100 boxes before stage 10 (black box)
  --have 50 boxes in one stage (dice)
Bonuses 
  --Break 200 bonus boxes (excite) 
  --Break 200 boom boxes (angry)
  --break 200 buff boxes (rainbow)
  --use all the power ups (ruby)
  --??? (find and break the rare spicy box) (pepper)
Stats 
  --get a total quake rating of 2,500 (anvil)
  --jump 1000 times (geo)
  --move 10,000 distance (amythest)
  --get hit a total of 1000 times (gory)
Secrets 
  --find the smiley face (smiley)
  --reach very high in the sky (tophat)
  --do nothing for 1 minute without pausing (3D cube)
playing 
  --play 1 game (face) 
  --play 10 games (eye) 
  --play 50 games (quad) 
other
  --make it to stage 15 without taking damage (heart)
  --get to stage 20 without using a power up (cute)
  --kill an eye past stage 30 (spooky) 
  --make it to stage 35 without using any skips or restarts (shock) 
*/

//dev testing functions
var loadup = true; //do the loading animation at the very start of running the game
canPlay = true; //this is important - it affects whether or not you must first do the tutorial

function p(num) {
	if (curPowers.length < 3) curPowers.push(allPowers[num]);
}

function u() {
	var len = unlocked.length;
	unlocked = [];
	for (var i = 0; i < len; i++) {
		unlocked.push(true);
  }
}

function wjt(x) {
  //wall jump test
  boxes = 7;
	boxs.destroyEach();
	if (typeof(x) == "undefined") {
    x = 100;
	}
	for (var i = 0; i < 7; i++) {
		var box1 = createSprite(x, 272 - i * 48);
		box1.setAnimation(ima + "box" + suf);
		box1.pause();
		box1.depth = 0;
		boxs.add(box1);
	}
}

function goto(s) {
	hp = 1000;
	savedBoxes = [];
	savedBads = [];
	savedThorns = [];
	savedEyes = [];
	boxs.destroyEach();
	bads.destroyEach();
	thorns.destroyEach();
	shooters.destroyEach();
	bullets.destroyEach();
	boxs.destroyEach();
	boxes = 0;
	stage = s;
	dot.x = cube.x;
	dot.y = cube.y;

}

function debugCont() {
	if (keyWentDown("v")) {
		debugging = !debugging;
	}
}

//save/load variables into/from localStorage
function saveGame() {
	if (typeof(Storage) !== "undefined") {
		//game variables
		localStorage.setItem("beatTutorial", beatTutorial);
		localStorage.setItem("highscores", JSON.stringify(highscores));
		localStorage.setItem("unlockedAchs", JSON.stringify(unlocked));
		localStorage.setItem("topstage", topstage);
		localStorage.setItem("gamesPlayed", games);
		localStorage.setItem("achBeat", ach);
		localStorage.setItem("totalBroke", totalBroke);
		localStorage.setItem("totalSquash", totalSquash);
		localStorage.setItem("totalHits", totalHits);
		localStorage.setItem("totalDista", totalDista);
		localStorage.setItem("totalJumps", totalJumps);
		localStorage.setItem("totalQuake", totalQuake);
		localStorage.setItem("totalResets", totalResets);
		localStorage.setItem("totalExplosions", totalExplosions);
		localStorage.setItem("totalPowerups", totalPowerups);
		localStorage.setItem("totalBonuses", totalBonuses);
		localStorage.setItem("totalEyes", eyesTotal);
		localStorage.setItem("totalThorns", thornsTotal);
		localStorage.setItem("totalBads", badsTotal);
		//menu variables
		localStorage.setItem("costumesOn", costumes);
		localStorage.setItem("cloudShowOn", cloudShow);
		localStorage.setItem("grassShowOn", grassShow);
		localStorage.setItem("shakableOn", shakable);
		localStorage.setItem("animateOn", animate);
		localStorage.setItem("fastMenuOn", fastMenu);
		localStorage.setItem("speedBarShowOn", speedBarShow);
		localStorage.setItem("directorShowOn", showDirections);
		localStorage.setItem("costume", skin);
		localStorage.setItem("theme", themeNum);
		
		//submit stats to kongregate
		submitStats();
			
		console.log("Saved Game");
	}
}

function loadGame() {
	if ((typeof(Storage) !== "undefined")) {
		if (localStorage.length > 0) {
			//gamevariables
			eyesTotal = JSON.parse(localStorage.getItem("totalEyes"));
			thornsTotal = JSON.parse(localStorage.getItem("totalThorns"));
			badsTotal = JSON.parse(localStorage.getItem("totalBads"));
			totalBroke = JSON.parse(localStorage.getItem("totalBroke"));
			totalSquash = JSON.parse(localStorage.getItem("totalSquash"));
			totalHits = JSON.parse(localStorage.getItem("totalHits"));
			totalDista = JSON.parse(localStorage.getItem("totalDista"));
			totalJumps = JSON.parse(localStorage.getItem("totalJumps"));
			totalQuake = JSON.parse(localStorage.getItem("totalQuake"));
			totalResets = JSON.parse(localStorage.getItem("totalResets"));
			totalExplosions = JSON.parse(localStorage.getItem("totalExplosions"));
			totalPowerups = JSON.parse(localStorage.getItem("totalPowerups"));
			totalBonuses = JSON.parse(localStorage.getItem("totalBonuses"));
			beatTutorial = JSON.parse(localStorage.getItem("beatTutorial"));
			topstage = JSON.parse(localStorage.getItem("topstage"));
			games = JSON.parse(localStorage.getItem("gamesPlayed"));
			ach = JSON.parse(localStorage.getItem("achBeat"));
			highscores = JSON.parse(localStorage.getItem("highscores"));
			unlocked = JSON.parse(localStorage.getItem("unlockedAchs"));
			//menu variables
			costumes = JSON.parse(localStorage.getItem("costumesOn"));
			cloudShow = JSON.parse(localStorage.getItem("cloudShowOn"));
			grassShow = JSON.parse(localStorage.getItem("grassShowOn"));
			shakable = JSON.parse(localStorage.getItem("shakableOn"));
			animate = JSON.parse(localStorage.getItem("animateOn"));
			speedBarShow = JSON.parse(localStorage.getItem("speedBarShowOn"));
			showDirections = JSON.parse(localStorage.getItem("directorShowOn"));
			fastMenu = JSON.parse(localStorage.getItem("fastMenuOn"));
			if (fastMenu) mspd = 4;
			else mspd = 1;
			themeNum = JSON.parse(localStorage.getItem("theme"));
			switch (themeNum) {
				case 1:
					colour = true;
					suf = "_night";
					ima = "c_";
					colouring(false, true, false); //night
					break;
				case 2:
					colour = false;
					suf = "";
					ima = "";
					colouring(true, false, false); //vintage
					break;
				case 3:
					colour = true;
					suf = "_snow";
					ima = "c_";
					colouring(false, false, true); //winter
					break;
				default:
					colour = true;
					suf = "";
					ima = "c_";
					colouring(false, false, false); //normal 
					break;
			}
			skin = JSON.parse(localStorage.getItem("costume"));
			if (themeNum != 2) {
				cube.setAnimation(ima + "cube" + skins[skin]);
				selector.setAnimation(ima + "cube" + skins[skin]);
			} else {
				cube.setAnimation(ima + "cube");
				selector.setAnimation(ima + "cube");
			}
			cube.pause();
			selector.pause();
			
			//submit stats to kongregate
			submitStats();
			
			console.log("Loaded Game");
		}
	}
}

function submitStats() {
	if (typeof(kongregate) !== "undefined") {
		kongregate.stats.submit('Top Stage', topstage);
		kongregate.stats.submit('High Score', highscores[0]);
		kongregate.stats.submit('Boxes Broke', totalBroke);
		kongregate.stats.submit('Achievements', ach);
		kongregate.stats.submit('Enemies Killed', totalSquash);
		let numero = ((beatTutorial) ? 1 : 0);
		kongregate.stats.submit('Tutorial Complete', numero);
	}
}

loadGame(); //redefine variables that were saved in localstorage
//Code and Images created by Ethan S. Fine (Finesden Studios)
//All Rights Reserved © 2019-2020 Ethan S. Fine
//----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};