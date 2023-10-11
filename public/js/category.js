// เพิ่มรายการอำเภอที่เกี่ยวข้องกับจังหวัดที่เลือก
const categoryeDropdown = document.getElementById("category");
const subcategoryDropdown = document.getElementById("subCategory");

// สร้างรายการอำเภอสำหรับกรุงเทพมหานคร
const foodCategory = ["หมวดหมุ่","อาหารอีสาน", "อาหารเหนือ", "อาหารใต้","อาหารไทย","อาหารอินเดีย","อาหารอิตาเลียน","อาหารตะวันตก","อาหารเวียดนาน","อาหารเกาหลี","อาหารญีปุ่น","อาหารจีน","อาหารมุสลิม","อาหารปุฟเฟ่ต์/ชาบู/หมูกระทะ","อาหารตามสั่ง","ก๋วยเตี๋ยว/ราดหน้า","ผัดไทย/หอยทอด","ติ่มซำ","เบเกอรี่","ไอศกรีม","ฟิชช่า","ขนม/ของหวาน","ข้าวแกง",];

// สร้างรายการอำเภอสำหรับเชียงใหม่
const hotelCategory = ["หมวดหมุ่","โรงแรม * แบ่งระดับ 1 ดาว - 5 ดาว", "โฮสเทล * แบ่งระดับ 1 ดาว - 5 ดาว", "รีสอร์ท","บ้านพัก/ห้องพัก","โฮมสเตย์","ลานกางเต้นท์"];

// สร้างรายการอำเภอสำหรับภูเก็ต
const travelCategory = ["หมวดหมุ่","แหล่งท่องเที่ยวทางประวัติศาสตร์ และวัฒนธรรม", "แหล่งท่องเที่ยวทางธรรมชาติ", "แหล่งท่องเที่ยวสำหรับกิจกรรมพิเศษ นันทนาการ และความสนใจพิเศษ"];

// เมื่อผู้ใช้เลือกจังหวัด
categoryeDropdown.addEventListener("change", function() {
    // เคลียร์รายการอำเภอที่แสดงอยู่ใน dropdown อำเภอ
    subcategoryDropdown.innerHTML = "";

    // ตรวจสอบค่าที่เลือกใน dropdown จังหวัดและเพิ่มรายการอำเภอที่เกี่ยวข้อง
    const selectedCategory = categoryeDropdown.value;

    if (selectedCategory === "food") {
        populateCategory(foodCategory);
    } else if (selectedCategory === "hotel") {
        populateCategory(hotelCategory);
    } else if (selectedCategory === "travel") {
        populateCategory(travelCategory);
    }
});

// ฟังก์ชันสำหรับเพิ่มรายการอำเภอลงใน dropdown อำเภอ
function populateCategory(subcategoryList) {
    subcategoryList.forEach(function(subCategory) {
        const option = document.createElement("option");
        option.text = subCategory;
        subcategoryDropdown.add(option);
    });
}