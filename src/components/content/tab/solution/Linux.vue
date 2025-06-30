<template>
  <div class="solution-guide">
    <h5 class="solution-guide__title">Linux 솔루션 설치 및 사용 가이드</h5>
    
    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">1. 시스템 요구사항</h6>
      <ul class="solution-guide__list">
        <li>운영체제: Ubuntu 18.04 LTS 이상, CentOS 7 이상, RHEL 7 이상</li>
        <li>메모리: 최소 2GB RAM (권장 4GB 이상)</li>
        <li>저장공간: 최소 500MB 이상</li>
        <li>네트워크: 인터넷 연결 필수</li>
        <li>권한: root 또는 sudo 권한 필요</li>
      </ul>
    </div>

    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">2. 설치 방법</h6>
      <div class="solution-guide__code-block">
        <p><strong>Ubuntu/Debian 계열:</strong></p>
        <pre><code># 패키지 업데이트
sudo apt update && sudo apt upgrade

# 필요한 의존성 설치
sudo apt install openjdk-11-jdk curl wget

# 솔루션 다운로드 및 설치
wget [다운로드_URL]
tar -xzf solution-linux.tar.gz
sudo mv solution /opt/
sudo chmod +x /opt/solution/bin/*</code></pre>
      </div>
      
      <div class="solution-guide__code-block">
        <p><strong>CentOS/RHEL 계열:</strong></p>
        <pre><code># 패키지 업데이트
sudo yum update

# Java 설치
sudo yum install java-11-openjdk-devel

# 솔루션 다운로드 및 설치
wget [다운로드_URL]
tar -xzf solution-linux.tar.gz
sudo mv solution /opt/
sudo chmod +x /opt/solution/bin/*</code></pre>
      </div>
    </div>

    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">3. 설정 방법</h6>
      <ul class="solution-guide__list">
        <li>환경 변수 설정: JAVA_HOME, PATH 설정</li>
        <li>설정 파일 편집: /opt/solution/config/application.properties</li>
        <li>API 키 및 데이터베이스 연결 정보 입력</li>
        <li>방화벽 설정: 필요한 포트 개방</li>
        <li>서비스 등록: systemd 서비스로 등록 (선택사항)</li>
      </ul>
    </div>

    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">4. 서비스 실행</h6>
      <div class="solution-guide__code-block">
        <p><strong>수동 실행:</strong></p>
        <pre><code># 서비스 시작
sudo /opt/solution/bin/start.sh

# 서비스 상태 확인
sudo /opt/solution/bin/status.sh

# 서비스 중지
sudo /opt/solution/bin/stop.sh</code></pre>
      </div>
      
      <div class="solution-guide__code-block">
        <p><strong>systemd 서비스 등록:</strong></p>
        <pre><code># 서비스 파일 생성
sudo nano /etc/systemd/system/address-solution.service

# 서비스 활성화 및 시작
sudo systemctl daemon-reload
sudo systemctl enable address-solution
sudo systemctl start address-solution</code></pre>
      </div>
    </div>

    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">5. 사용 방법</h6>
      <ul class="solution-guide__list">
        <li>REST API를 통한 주소 검색 서비스 제공</li>
        <li>JAVA와 .NET 클라이언트 라이브러리 제공</li>
        <li>API 문서: http://localhost:8080/swagger-ui.html</li>
        <li>로그 확인: /opt/solution/logs/ 디렉토리</li>
      </ul>
    </div>

    <div class="solution-guide__section">
      <h6 class="solution-guide__subtitle">6. 문제 해결</h6>
      <ul class="solution-guide__list">
        <li>권한 문제: sudo 권한 확인 및 파일 권한 설정</li>
        <li>포트 충돌: netstat -tulpn으로 포트 사용 현황 확인</li>
        <li>메모리 부족: JVM 힙 메모리 설정 조정</li>
        <li>네트워크 연결: 방화벽 및 네트워크 설정 확인</li>
      </ul>
    </div>

    <div class="solution-guide__notice">
      <p><strong>주의사항:</strong></p>
      <ul>
        <li>root 권한으로 실행하지 마세요. 별도 사용자 계정을 생성하세요.</li>
        <li>정기적으로 로그 파일을 확인하고 정리하세요.</li>
        <li>보안 업데이트를 정기적으로 적용하세요.</li>
        <li>백업 정책을 수립하여 데이터를 보호하세요.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Linux 솔루션 가이드 컴포넌트
</script>

<style lang="scss" scoped>
.solution-guide {
  padding: 20px;
  
  &__title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #28a745;
  }
  
  &__section {
    margin-bottom: 25px;
  }
  
  &__subtitle {
    font-size: 16px;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
  }
  
  &__list {
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
      line-height: 1.5;
      color: #666;
    }
  }
  
  &__code-block {
    margin: 15px 0;
    
    p {
      font-weight: bold;
      margin-bottom: 8px;
      color: #333;
    }
    
    pre {
      background-color: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 4px;
      padding: 15px;
      overflow-x: auto;
      
      code {
        font-family: 'Courier New', monospace;
        font-size: 14px;
        color: #333;
        line-height: 1.4;
      }
    }
  }
  
  &__notice {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    margin-top: 20px;
    
    p {
      margin-bottom: 10px;
      color: #dc3545;
    }
    
    ul {
      padding-left: 20px;
      margin: 0;
      
      li {
        color: #666;
        margin-bottom: 5px;
      }
    }
  }
}
</style> 