require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "should get index" do
    get posts_url
    assert_response :success
    assert_select 'title', "Reddit", "Wrong title"
   
  end

  test "layout_links" do 
    get posts_url    
    post = Post.first
    assert_select 'form[action=?]', new_post_path
    assert_select 'a[href=?]', edit_post_path(post)
    assert_select 'a[href=?]', post_path(post)
    get post_url(post)
    # assert_select 'form[action=?]', new_post_comment_path(post)

  end

end
