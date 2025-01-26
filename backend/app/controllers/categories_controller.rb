class CategoriesController < ApplicationController
  before_action :set_category, only: %i[ edit update ]

  # GET /categories or /categories.json
  def index
    @categories = Category.where(company_id: current_user.company_id)
  end

  # GET /categories/new
  def new
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
  end

  # POST /categories or /categories.json
  def create
    @category = Category.new(category_params)
    @category.company_id = current_user.company_id

    respond_to do |format|
      if @category.save
        format.html { redirect_to categories_url, notice: success_message('create') }
        format.json { render :show, status: :created, location: @category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /categories/1 or /categories/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to categories_url, notice: success_message('update') }
        format.json { render :show, status: :ok, location: @category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_category
      @category = Category.find(params[:id])
    end

    def category_params
      params.require(:category).permit(:name)
    end
  
    def success_message(action)
      I18n.t("categories.#{action}.success")
    end
end
