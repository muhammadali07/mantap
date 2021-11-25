import 'package:app/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: ListView(
          padding: EdgeInsets.symmetric(
            horizontal: 25,
          ),
          children: [
            Container(
              height: 150,
              child: Image.asset(
                "assets/logo/logo_only.png",
                fit: BoxFit.contain,
              ),
            ),
            TextField(
              cursorColor: Colors.black87,
              decoration: InputDecoration(
                label: Text(
                  "Email",
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 18,
                  ),
                ),
                border: InputBorder.none,
                fillColor: Colors.grey[300],
                filled: true,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              cursorColor: Colors.black87,
              obscureText: true,
              decoration: InputDecoration(
                label: Text(
                  "Password",
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 18,
                  ),
                ),
                border: InputBorder.none,
                fillColor: Colors.grey[300],
                filled: true,
                suffix: IconButton(
                  onPressed: () {},
                  icon: Icon(
                    Icons.remove_red_eye_outlined,
                    color: Colors.grey,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              width: Get.width,
              child: ElevatedButton(
                onPressed: () => Get.offAllNamed(Routes.HOME),
                child: Text("Log In"),
                style: ElevatedButton.styleFrom(
                    primary: Color(0xFFEC5F5F),
                    padding: EdgeInsets.symmetric(
                      vertical: 20,
                    )),
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextButton(
              onPressed: () {},
              child: Text("Forgot Password ?"),
            ),
            Row(
              children: [
                Expanded(
                  child: Container(
                    margin: EdgeInsets.only(right: 10),
                    height: 1,
                    color: Color(0xFFC7C9D9),
                  ),
                ),
                Text(
                  "or",
                  style: TextStyle(color: Color(0xFF8C8C8C)),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.only(left: 20),
                    height: 1,
                    color: Color(0xFFC7C9D9),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Container(
              width: Get.width,
              child: ElevatedButton(
                onPressed: () {},
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.asset("assets/icons/fb.png"),
                    SizedBox(
                      width: 10,
                    ),
                    Text("Log in with Facebook"),
                  ],
                ),
                style: ElevatedButton.styleFrom(
                    primary: Color(0xFF0082CD),
                    padding: EdgeInsets.symmetric(
                      vertical: 20,
                    )),
              ),
            ),
            SizedBox(
              height: 12.5,
            ),
            Container(
              width: Get.width,
              child: ElevatedButton(
                onPressed: () {},
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.asset("assets/icons/google.png"),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      "Log in with Google",
                      style: TextStyle(color: Color(0xFF303030)),
                    ),
                  ],
                ),
                style: ElevatedButton.styleFrom(
                    primary: Color(0xFFF6F7FA),
                    padding: EdgeInsets.symmetric(
                      vertical: 20,
                    )),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Don’t have an account?",
                  style: TextStyle(
                    color: Colors.black54,
                  ),
                ),
                TextButton(
                  onPressed: () {},
                  child: Text(
                    "Sign Up",
                    style: TextStyle(color: Color(0xFF0082CD)),
                  ),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
