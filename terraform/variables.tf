variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
  default     = "c7i-flex.large"
}

variable "key_name" {
  description = "theTagless"
  type        = string
}

variable "instance_name" {
  description = "EC2 Instance Name"
  type        = string
  default     = "theTagless-DevOps"
}