<!DOCTYPE html>
<html>
<head>
    <title>Community</title>
    <?php include '../common/head_common.php' ?> 
    <?php include 'head_sub.php' ?>  
</head>
<body>
    <?php include '../common/header.php' ?>
    <figure>
        <h2>COMMUNITY</h2>
        <div><a href="/hyeji_delete"><i class="fas fa-home"></i></a></div>
    </figure>
    <nav id="lnb_commu">
        <ul>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">도서행사</a></li>
            <li><a href="#">독자공모</a></li>
            <li><a href="#">민음 북클럽</a></li>
            <li><a href="#">자료실</a></li>
            <li><a href="#">게시판</a></li>
        </ul>

        <div id="mo_lnb_commu">
            <select name="lnb_commmu" id="">
                <option value="">공지사항</option>
                <option value="">도서행사</option>
                <option value="">독자공모</option>
                <option value="">민음 북클럽</option>
                <option value="">자료실</option>
                <option value="">게시판</option>
            </select>
        </div>
    </nav>
    
    <main>
        <section>
            <div id="content_wrap">
                <div class="body_txt">
                    <div class="img_box_bg"></div>
                    <div class="img_box img_box_commu"></div>
                    <p class="quote quote_commu">“Reading is an exercise in empathy an exercise<br/>in walking in someone else’s shoes for a while.”<br/><span>Malorie Blackman</span></p>
                </div>

                <div id="commu_info">
                    <div class="commu_title">
                        <h3>Community Notice</h3>
                        <div>
                            <div class="commu_total">게시글<em>562</em>건</div>
                            <div class="commu_search">
                                <select name="commu_search" title="검색구분">
                                    <option value="제목">제목</option>
                                    <option value="내용">내용</option>
                                    <option value="작성자">작성자</option>
                                </select>
                                <input type="text" class="commu_searchbar" title="검색어입력" placeholder="검색어를 입력하세요" />
                                <input type="button" class="commu_search_btn" value="찾기" />
                            </div>
                        </div>
                    </div>

                    <div class="commu_table_wrap">
                        <table class="commu_table">
		                    <caption class="skip">번호, 내용, 작성자, 등록일, 조회수를 기록한 문학동네 커뮤니티 공지사항 리스트</caption>
		                    <thead>
			                    <tr>
                    				<th class="commu_num">번호</th>
                    				<th class="commu_title">내용</th>
                    				<th class="commu_wr">작성자</th>
                    				<th class="commu_date">등록일</th>
                    				<th class="commu_count">조회수</th>
                    			</tr>
                    		</thead>
                    		<tbody>
                                <tr>
            				        <td class="commu_num" data-title="번호">562</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">홍길동</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">1236</td>
            			        </tr>
            			        <tr>
            				        <td class="commu_num" data-title="번호">561</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">허난설헌</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">7501</td>
            			        </tr>
                                <tr>
            				        <td class="commu_num" data-title="번호">560</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">홍길동</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">5469</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">559</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">허균</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">5426</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">558</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">허난설헌</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">9434</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">557</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">홍길동</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">4697</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">556</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">허균</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">3388</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">555</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">허난설헌</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">4156</td>
            			        </tr> 
                                <tr>
            				        <td class="commu_num" data-title="번호">554</td>
            				        <td class="commu_title"><a href="#"> 2019년 4월 수의계약 내역공개</a></td>
            				        <td class="commu_wr" data-title="작성자">홍길동</td>
            				        <td class="commu_date" data-title="등록일">2019-04-30</td>
            				        <td class="commu_count" data-title="조회수">2697</td>
            			        </tr>            					
                    		</tbody>
                    	</table>
                  
                        <div class="commu_page_wrap">
                            <ul>
                              <li class="commu_page"><a href="#"><img src="../img/sub/default/first.png" alt="첫페이지로 이동" /></a></li>
                              <li class="commu_page"><a href="#">이전페이지로 이동</a></li>
                              <li><span class="commu_current">1</span></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li><a href="#">4</a></li>
                              <li><a href="#">5</a></li>
                              <li><a href="#">6</a></li>
                              <li><a href="#">7</a></li>
                              <li><a href="#">8</a></li>
                              <li><a href="#">9</a></li>
                              <li><a href="#">10</a></li>
                              <li class="commu_page"><a href="#">다음페이지로 이동</a></li>
                              <li class="commu_page"><a href="#">마지막페이지로 이동</a></li>
                            </ul>
                        </div>
                   </div>
               </div>
           </div>
        </section>
    </main>

    <?php include '../common/footer.php' ?>

</body>
</html>