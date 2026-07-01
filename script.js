// Quản lý chuyển đổi giữa các ngày (Tabs Lịch Trình)
function openDay(evt, dayName) {
    let i, tabcontent, tablinks;
    
    // Ẩn toàn bộ các nội dung ngày cũ
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Gỡ class active của toàn bộ nút tab
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Hiển thị ngày được chọn và kích hoạt nút tương ứng
    document.getElementById(dayName).classList.add("active");
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

// Hàm format tiền tệ áp dụng dấu chấm phân cách hàng nghìn
function formatMoney(amount) {
    return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ";
}

// Tự động tính toán chi phí và phân bổ theo số người
function calculateBudget() {
    const costCar = parseFloat(document.getElementById("cost-car").value) || 0;
    const costFood = parseFloat(document.getElementById("cost-food").value) || 0;
    const costCafe = parseFloat(document.getElementById("cost-cafe").value) || 0;
    const costBbq = parseFloat(document.getElementById("cost-bbq").value) || 0;
    const costOther = parseFloat(document.getElementById("cost-other").value) || 0;
    
    const total = costCar + costFood + costCafe + costBbq + costOther;
    
    const peopleInput = document.getElementById("people");
    const totalPeople = parseInt(peopleInput.value) || 1;
    
    const perPerson = total / (totalPeople > 0 ? totalPeople : 1);
    
    // Đổ dữ liệu ra giao diện hiển thị
    document.getElementById("total-val").innerText = formatMoney(total);
    document.getElementById("per-person-val").innerText = formatMoney(perPerson);
}

// Khởi chạy tính toán ngay khi trang web vừa tải xong
document.addEventListener("DOMContentLoaded", function() {
    calculateBudget();
});