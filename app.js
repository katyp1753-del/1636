// 22건 민원서비스 데이터셋
const serviceData = [
  { "서비스ID": "S001", "서비스명": "주민등록등본 발급", "소관기관": "주민센터", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S002", "서비스명": "전입신고", "소관기관": "복지정책과", "민원분야": "주민등록", "온라인처리": "불가", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S003", "서비스명": "인감증명 발급", "소관기관": "복지정책과", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S004", "서비스명": "주민등록증 재발급", "소관기관": "건축과", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S005", "서비스명": "건축물대장 발급", "소관기관": "구청 민원봉사과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 0, "수수료": 1000 },
  { "서비스ID": "S006", "서비스명": "건축허가 신청", "소관기관": "건축과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 1, "수수료": 2000 },
  { "서비스ID": "S007", "서비스명": "용도변경 신고", "소관기관": "시청 민원과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S008", "서비스명": "지방세 납부확인서", "소관기관": "건축과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 1, "수수료": 1000 },
  { "서비스ID": "S009", "서비스명": "취득세 신고", "소관기관": "교통행정과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S010", "서비스명": "재산세 조회", "소관기관": "교통행정과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 3, "수수료": 0 },
  { "서비스ID": "S011", "서비스명": "기초연금 신청", "소관기관": "건축과", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S012", "서비스명": "복지급여 조회", "소관기관": "시청 민원과", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 14, "수수료": 5000 },
  { "서비스ID": "S013", "서비스명": "장애인 등록", "소관기관": "주민센터", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 5, "수수료": 0 },
  { "서비스ID": "S014", "서비스명": "자동차 등록", "소관기관": "주민센터", "민원분야": "교통", "온라인처리": "가능", "처리기한일": 1, "수수료": 5000 },
  { "서비스ID": "S015", "서비스명": "운전면허 갱신", "소관기관": "교통행정과", "민원분야": "교통", "온라인처리": "불가", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S016", "서비스명": "주정차 위반 조회", "소관기관": "주민센터", "민원분야": "교통", "온라인처리": "가능", "처리기한일": 7, "수수료": 1000 },
  { "서비스ID": "S017", "서비스명": "배출시설 신고", "소관기관": "주민센터", "민원분야": "환경", "온라인처리": "가능", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S018", "서비스명": "폐기물 처리 신청", "소관기관": "시청 민원과", "민원분야": "환경", "온라인처리": "가능", "처리기한일": 14, "수수료": 5000 },
  { "서비스ID": "S019", "서비스명": "식품영업 신고", "소관기관": "건축과", "민원분야": "위생", "온라인처리": "가능", "처리기한일": 3, "수수료": 2000 },
  { "서비스ID": "S020", "서비스명": "위생업소 조회", "소관기관": "시청 민원과", "민원분야": "위생", "온라인처리": "불가", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S021", "서비스명": "여권 발급 신청", "소관기관": "건축과", "민원분야": "여권", "온라인처리": "가능", "처리기한일": 7, "수수료": 1000 },
  { "서비스ID": "S022", "서비스명": "여권 재발급", "소관기관": "교통행정과", "민원분야": "여권", "온라인처리": "가능", "처리기한일": 1, "수수료": 1000 }
];

// DOM 요소 식별
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const clearBtn = document.getElementById('clearBtn');
const resetAllBtn = document.getElementById('resetAllBtn');
const serviceTableBody = document.getElementById('serviceTableBody');
const filteredCount = document.getElementById('filteredCount');
const totalCount = document.getElementById('totalCount');
const noDataMessage = document.getElementById('noDataMessage');
const tagButtons = document.querySelectorAll('.tag-btn');

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  totalCount.textContent = serviceData.length;
  renderTable(serviceData);

  // 이벤트 리스너 등록
  searchInput.addEventListener('input', handleFilter);
  categorySelect.addEventListener('change', (e) => {
    updateTagButtons(e.target.value);
    handleFilter();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    handleFilter();
  });

  resetAllBtn.addEventListener('click', resetFilters);

  // 퀵 태그 버튼 처리
  tagButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      categorySelect.value = category;
      updateTagButtons(category);
      handleFilter();
    });
  });
});

// 검색어 및 민원분야 동시 필터링 핵심 함수
function handleFilter() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  // X 버튼 노출 여부
  clearBtn.style.display = keyword.length > 0 ? 'block' : 'none';

  const filteredData = serviceData.filter(item => {
    // 1. 서비스명 키워드 조건
    const matchesKeyword = item.서비스명.toLowerCase().includes(keyword);
    // 2. 민원분야 카테고리 조건
    const matchesCategory = selectedCategory === 'ALL' || item.민원분야 === selectedCategory;

    return matchesKeyword && matchesCategory;
  });

  renderTable(filteredData);
  filteredCount.textContent = filteredData.length;

  if (filteredData.length === 0) {
    noDataMessage.classList.remove('hidden');
  } else {
    noDataMessage.classList.add('hidden');
  }
}

// 테이블 동적 렌더링
function renderTable(data) {
  serviceTableBody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    
    // 포맷팅 (처리기한 0일 -> 즉시, 수수료 0원 -> 무료)
    const periodText = item.처리기한일 === 0 ? '즉시' : `${item.처리기한일}일`;
    const feeText = item.수수료 === 0 ? '무료' : `${item.수수료.toLocaleString()}원`;
    const isOnline = item.온라인처리 === '가능';

    tr.innerHTML = `
      <td>${item.서비스ID}</td>
      <td><strong>${item.서비스명}</strong></td>
      <td><span class="badge category">${item.민원분야}</span></td>
      <td>${item.소관기관}</td>
      <td><span class="badge ${isOnline ? 'online' : 'offline'}">${item.온라인처리}</span></td>
      <td>${periodText}</td>
      <td>${feeText}</td>
    `;
    serviceTableBody.appendChild(tr);
  });
}

// 퀵 태그 버튼 활성화 상태 업데이트
function updateTagButtons(category) {
  tagButtons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 전체 초기화
function resetFilters() {
  searchInput.value = '';
  categorySelect.value = 'ALL';
  clearBtn.style.display = 'none';
  updateTagButtons('ALL');
  handleFilter();
}